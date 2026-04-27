# iHuus Neighborhood Intelligence — Claude Desktop Extension

One-click MCP bundle for [Claude Desktop](https://claude.ai/download). Connects Claude
to 18 neighborhood analysis tools covering walkability, school ratings, flood and fire
risk, air quality, noise, demographics, and more for any US address.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

> Requires an `API AI Pro` plan — [get one at ihuus.com/pricing](https://ihuus.com/pricing).

---

## Install

1. **Download** the latest
   [`mcpb.mcpb`](https://github.com/ihuus/mcp/raw/main/claude/desktop/mcpb.mcpb) file
   (or find it in `claude/desktop/` after cloning the repo).

2. **Open** the file — Claude Desktop will show an install dialog.

3. **Paste your iHuus API key** when prompted. Your key is stored securely and never
   leaves your machine.

4. **Verify** the extension is enabled: open Claude Desktop → **Settings** → look for
   **iHuus Neighborhood Intelligence** in the extensions list. Toggle it on if needed.

That's it — all 18 tools and 5 MCP prompts are available immediately.

---

## Troubleshooting

If tools are not appearing or calls fail:

1. Open Claude Desktop → **Settings** → **Developer**.
2. Find **ihuus-neighborhood-intelligence** in the server list.
3. Check the status indicator — green means connected.
4. Click the server name to view logs (stderr output from the proxy).

Common issues:

| Symptom                   | Fix                                                                  |
| ------------------------- | -------------------------------------------------------------------- |
| Server shows red / failed | Verify your API key is correct and your `API AI Pro` plan is active. |
| No tools listed           | Restart Claude Desktop. The extension discovers tools on startup.    |
| Tool calls return errors  | Check the logs in the Developer panel for details.                   |

---

## What's Inside

The `.mcpb` bundle contains a lightweight Node.js proxy that:

- Connects to 6 remote iHuus MCP servers over Streamable HTTP
- Discovers all tools and prompts at startup
- Exposes them to Claude Desktop over local stdio

No API keys are sent to any third party — they go directly from your machine to
`api.ihuus.com`.

---

## Available Tools

| Domain           | Tools                                                                  | Coverage                         |
| ---------------- | ---------------------------------------------------------------------- | -------------------------------- |
| **Vibe**         | Walkability · Privacy · Visual appeal · Dog friendliness · Urban–rural | CA and TX                        |
| **Environment**  | Noise levels · Industrial proximity · Air quality                      | CA and TX                        |
| **Risk**         | Flood safety · Fire risk                                               | Flood: CA and TX · Fire: CA only |
| **Schools**      | School search · District lookup · School detail                        | CA and TX                        |
| **Demographics** | Insurance coverage · Ideological lean · Age profile                    | CA and TX                        |
| **Geospatial**   | Address geocoding (used automatically by all tools)                    | CA and TX                        |

---

## Example Prompts

```
What's the walkability and noise level near 250 Mariposa Ave, Mountain View, CA?

Find top-rated elementary schools within 2 miles of 450 Serra Mall, Stanford, CA.

Is 1100 Congress Ave, Austin, TX at high flood or fire risk?

Give me a full neighborhood report for 250 Mariposa Ave, Mountain View, CA.
```

---

## Building the MCPB Bundle

If you modify the proxy or manifest and need to rebuild:

```bash
# Install the MCPB CLI (one-time)
npm install -g @anthropic-ai/mcpb

# Install production dependencies
cd claude/desktop
npm install --production

# Pack the bundle
mcpb pack
```

This produces a new `mcpb.mcpb` file in the current directory. Open it to install
the updated bundle in Claude Desktop.
