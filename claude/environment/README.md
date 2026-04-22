# iHuus Environment — Claude Desktop Extension

Assess the environmental quality of any US neighborhood — noise levels, industrial
proximity, and air quality.

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
| `noise-levels` | Serenity score with road, rail, and aviation source breakdown |
| `industrial-proximity` | Distance and hazard rating for nearby industrial sites |
| `air-quality` | Air quality safety score from monitoring station data |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The system prompt converts them to 1-10 automatically.

---

## Example Prompts

```
How noisy is the area around 1600 Pennsylvania Ave NW, Washington, DC?

Rate the environmental quality near 250 Mariposa Ave, Mountain View, CA.

Is there any industrial activity near 500 5th Ave, New York, NY?

What's the air quality like in downtown Los Angeles?
```
