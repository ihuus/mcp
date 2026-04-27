# Claude Desktop Extension

One-click MCP bundle (`.mcpb`) for [Claude Desktop](https://claude.ai/download).
Connects Claude to 18 neighborhood analysis tools and 5 MCP prompts — walkability,
school ratings, flood and fire risk, air quality, noise, demographics, and more for any
US address.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

> Requires an `api_advanced` plan — [get one at ihuus.com/pricing](https://ihuus.com/pricing).

---

## Install

1. **Download** [`mcpb.mcpb`](https://github.com/ihuus/mcp/raw/main/claude/desktop/mcpb.mcpb)
   (or find it in `claude/desktop/` after cloning the repo).
2. **Open** the file — Claude Desktop shows an install dialog.
3. **Paste your iHuus API key** when prompted.
4. **Verify** the extension is enabled under **Settings** → extensions list.

See [`claude/desktop/README.md`](desktop/README.md) for troubleshooting and full tool
reference.

---

## Available Tools

| Domain           | Tools                                                                  | Coverage                        |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------- |
| **Vibe**         | Walkability · Privacy · Visual appeal · Dog friendliness · Urban–rural | National                        |
| **Environment**  | Noise levels · Industrial proximity · Air quality                      | National                        |
| **Risk**         | Flood safety · Fire risk                                               | Flood: national · Fire: CA only |
| **Schools**      | School search · District lookup · School detail                        | CA and TX only                  |
| **Demographics** | Insurance coverage · Ideological lean · Age profile                    | National                        |
| **Geospatial**   | Address geocoding (used automatically by all tools)                    | National                        |

> **Data availability:** School data covers **California and Texas**. Fire risk covers
> **California only** (CALFIRE). All other tools have national US coverage.

---

## Example Prompts

```
What's the walkability and noise level near 250 Mariposa Ave, Mountain View, CA?

Find top-rated elementary schools within 2 miles of 450 Serra Mall, Stanford, CA.

Is 1100 Congress Ave, Austin, TX at high flood or fire risk?

Give me a full neighborhood report for 250 Mariposa Ave, Mountain View, CA.
```

Alternatively, type /ihuus... in Claude Desktop and check out our prompt templates.

---

[View full API docs →](https://docs.ihuus.com/)
