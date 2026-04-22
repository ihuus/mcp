# iHuus Schools — Claude Desktop Extension

Search K-12 schools, look up school district boundaries, and explore performance ratings
for locations in California and Texas.

> **Data availability:** School data is available for **California and Texas** only.

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
| `search/school-ratings` | Nearest K-12 schools with ratings, ordered by distance |
| `search/districts` | School districts overlapping a location |
| `search/school-by-district` | All schools belonging to a specific district (`lea_id`) |
| `school/{nces_id}` | Full school profile: enrollment, grades, rating, contact |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

School ratings are on a **1-10 scale**. Distances are returned in meters and converted to miles/feet by the system prompt.

---

## Example Prompts

```
What are the best elementary schools near 250 Mariposa Ave, Mountain View, CA?

Find all schools in the Palo Alto Unified School District.

What school district does 450 Serra Mall, Stanford, CA fall in?

Show me the highest-rated middle schools in the Austin, TX area.
```
