# iHuus Demographics — Claude Desktop Extension

Analyze neighborhood demographic profiles — health insurance coverage, ideological lean,
and population age mix — for any US location.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

1. Set your API key in your shell profile:
   ```bash
   export IHUUS_API_KEY=your_ihuus_api_key_here
   ```

2. Merge `claude_desktop_config.json` into your Claude Desktop config file and restart the app.

3. Paste `SYSTEM_PROMPT.md` into the custom instructions field of a [Claude Project](https://support.anthropic.com/en/articles/9517075-what-are-projects) for domain-expert behaviour.

See [`claude/README.md`](../README.md) for config file locations.

---

## Available Tools

| Tool | Description |
|---|---|
| `insurance-coverage` | Share of residents with health insurance (national coverage) |
| `ideological-lean` | Conservative–liberal political lean score |
| `population-profile` | Age mix from young adults to seniors |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The system prompt converts them to 1-10 automatically.

---

## Example Prompts

```
What's the demographic profile of 250 Mariposa Ave, Mountain View, CA?

How conservative is the neighborhood around 450 Serra Mall, Stanford, CA?

What age group dominates the population near Central Park, New York?

Compare the insurance coverage rates between two addresses in Houston, TX.
```
