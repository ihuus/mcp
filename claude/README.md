# Claude Desktop Extensions

Ready-to-use [Claude Desktop](https://claude.ai/download) MCP configurations for the
iHuus Neighborhood Intelligence API.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

### 1. Set your API key

Claude Desktop reads environment variables from your shell. Export `IHUUS_API_KEY` in
your shell profile so it is available when Claude Desktop launches:

**macOS / Linux** — add to `~/.zshrc`, `~/.bashrc`, or equivalent:

```bash
export IHUUS_API_KEY=your_ihuus_api_key_here
```

**Windows** — set via System Properties → Environment Variables, or in PowerShell:

```powershell
[Environment]::SetEnvironmentVariable("IHUUS_API_KEY", "your_key_here", "User")
```

### 2. Find your Claude Desktop config file

| OS | Path |
|---|---|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

Create the file if it does not exist.

### 3. Add an MCP server

Open `claude/schools/claude_desktop_config.json` (or whichever domain you want) and
**merge** its `mcpServers` block into your Claude Desktop config:

```json
{
  "mcpServers": {
    "ihuus-schools": { ... },
    "ihuus-geospatial": { ... }
  }
}
```

If you already have other MCP servers configured, add the new keys inside the existing
`mcpServers` object — do not replace the whole file.

To load all domains at once, use `claude/full/claude_desktop_config.json`.

### 4. Restart Claude Desktop

Changes to `claude_desktop_config.json` take effect after restarting the app.

---

## System Prompts (Claude Projects)

Each folder also contains a `SYSTEM_PROMPT.md` file. Paste its contents into the
**custom instructions** field of a [Claude Project](https://support.anthropic.com/en/articles/9517075-what-are-projects)
to give the agent domain expertise and consistent behaviour across conversations.

---

## Available Extensions

| Folder | Tools included |
|---|---|
| `demographics/` | Insurance coverage · Ideological lean · Age profile |
| `environment/` | Noise levels · Industrial proximity · Air quality |
| `risk/` | Flood safety · Fire risk (CA only) |
| `schools/` | School search · District lookup · School detail |
| `vibe/` | Walkability · Privacy · Visual appeal · Dog friendliness · Urban–rural |
| `full/` | All of the above + geocoding |

---

## Example Prompts

```
Find top-rated elementary schools within 2 miles of 250 Mariposa Ave, Mountain View, CA.

How is the air quality and noise level near 1600 Pennsylvania Ave NW, Washington, DC?

Is 123 Riverside Dr, Sacramento, CA at high flood or fire risk?

Give me a full neighborhood report for 450 Serra Mall, Stanford, CA.

How walkable and dog-friendly is the area around 1100 Congress Ave, Austin, TX?
```

---

[View full API docs →](https://docs.ihuus.com/)
