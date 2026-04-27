#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_KEY = process.env.IHUUS_API_KEY;
if (!API_KEY) {
  console.error(
    "[ihuus] IHUUS_API_KEY is required. Get one at https://ihuus.com/pricing",
  );
  process.exit(1);
}

const REMOTE_SERVERS = [
  {
    key: "ihuus-demographics",
    url: "https://api.ihuus.com/v1/mcp/demographics/",
  },
  {
    key: "ihuus-environment",
    url: "https://api.ihuus.com/v1/mcp/environment/",
  },
  { key: "ihuus-risk", url: "https://api.ihuus.com/v1/mcp/risk/" },
  { key: "ihuus-schools", url: "https://api.ihuus.com/v1/mcp/schools/" },
  { key: "ihuus-vibe", url: "https://api.ihuus.com/v1/mcp/vibe/" },
  { key: "ihuus-geospatial", url: "https://api.ihuus.com/v1/mcp/tools/" },
];

const toolMap = new Map();
const promptMap = new Map();
let allTools = [];
let allPrompts = [];

async function connectToServer(url) {
  const client = new Client({ name: "ihuus-proxy", version: "1.0.0" });
  const transport = new StreamableHTTPClientTransport(new URL(url), {
    requestInit: { headers: { Authorization: `Bearer ${API_KEY}` } },
  });
  await client.connect(transport);
  return client;
}

async function main() {
  for (const { key, url } of REMOTE_SERVERS) {
    try {
      const client = await connectToServer(url);

      const { tools } = await client.listTools();
      for (const tool of tools) {
        toolMap.set(tool.name, client);
        allTools.push(tool);
      }

      try {
        const result = await client.listPrompts();
        console.error(`[ihuus] ${key} prompts:`, JSON.stringify(result));
        for (const prompt of result.prompts) {
          promptMap.set(prompt.name, client);
          allPrompts.push(prompt);
        }
      } catch (err) {
        console.error(`[ihuus] ${key} prompts threw:`, err.message);
      }

      console.error(`[ihuus] ${key}: ${tools.length} tools`);
    } catch (err) {
      console.error(`[ihuus] ${key}: failed — ${err.message}`);
    }
  }

  if (allTools.length === 0) {
    console.error("[ihuus] No tools discovered. Check your API key.");
    process.exit(1);
  }

  const server = new Server(
    { name: "ihuus-neighborhood-intelligence", version: "1.0.0" },
    { capabilities: { tools: {}, prompts: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: allTools,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const client = toolMap.get(name);
    if (!client) throw new Error(`Unknown tool: ${name}`);
    return client.callTool({ name, arguments: args });
  });

  server.setRequestHandler(ListPromptsRequestSchema, async () => ({
    prompts: allPrompts,
  }));

  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const client = promptMap.get(name);
    if (!client) throw new Error(`Unknown prompt: ${name}`);
    return client.getPrompt({ name, arguments: args });
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `[ihuus] Proxy ready — ${allTools.length} tools, ${allPrompts.length} prompts`,
  );
}

main().catch((err) => {
  console.error("[ihuus] Fatal:", err);
  process.exit(1);
});
