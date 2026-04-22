# iHuus Risk — Claude Desktop Extension

Assess natural hazard risk — flood safety and wildfire risk — for any US address.

> **Data availability:** Flood risk has national US coverage. Fire risk data is available
> for **California only** (CALFIRE).

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

| Tool | Description | Coverage |
|---|---|---|
| `flood` | FEMA flood hazard designations and risk score | National |
| `fire` | CALFIRE Fire Hazard Severity Zone score | California only |
| `geocode-single` | Convert an address to coordinates (required before all other tools) | National |

All index scores are on a **0-255 scale**. The system prompt converts them to 1-10 automatically.

---

## Example Prompts

```
Is this house at 123 Riverside Dr, Sacramento, CA at flood or fire risk?

What's the flood risk for a property near the Mississippi River in New Orleans?

Compare flood risk between two addresses I'm considering in Houston, TX.

How high is the wildfire risk at 250 Mariposa Ave, Mountain View, CA?
```
