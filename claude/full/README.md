# iHuus Full — Claude Desktop Extension

All five iHuus intelligence domains in one extension: demographics, environment, risk,
schools, and vibe. The fastest way to generate a complete neighborhood analysis report.

> **Data availability:** School data covers **California and Texas**. Fire risk covers
> **California only** (CALFIRE). All other tools have national US coverage.

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

| Server | Tools |
|---|---|
| `ihuus-demographics` | `insurance-coverage` · `ideological-lean` · `population-profile` |
| `ihuus-environment` | `noise-levels` · `industrial-proximity` · `air-quality` |
| `ihuus-risk` | `flood` · `fire` (CA only) |
| `ihuus-schools` | `search/school-ratings` · `search/districts` · `search/school-by-district` · `school/{nces_id}` |
| `ihuus-vibe` | `walkability` · `privacy` · `visual-appeal` · `dog-friendliness` · `urban-rural` |
| `ihuus-geospatial` | `geocode-single` |

---

## Example Prompts

```
Give me a full neighborhood report for 250 Mariposa Ave, Mountain View, CA.

Compare two addresses I'm considering for my family — schools, safety, and walkability.

What's the overall quality of life like near downtown Austin, TX?

How walkable is 450 Serra Mall, Stanford, CA — and are there good schools nearby?
```
