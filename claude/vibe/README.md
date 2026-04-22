# iHuus Vibe — Claude Desktop Extension

Explore the character and quality of life of any US neighborhood — walkability, privacy,
visual appeal, dog friendliness, and urban-rural classification.

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
| `walkability` | Pedestrian infrastructure and proximity-to-amenities score |
| `privacy` | Housing density and lot-size seclusion score |
| `visual-appeal` | Architectural character and landscaping quality score |
| `dog-friendliness` | Parks, trails, and pet amenity proximity score |
| `urban-rural` | Built environment classification from dense urban to rural |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The system prompt converts them to 1-10 automatically.

---

## Example Prompts

```
How walkable is the area around 250 Mariposa Ave, Mountain View, CA?

Is 90210 Beverly Hills more of an urban or suburban vibe?

Find me the most private, low-density neighborhood near downtown Austin, TX.

How dog-friendly is the neighborhood at 450 Serra Mall, Stanford, CA?
```
