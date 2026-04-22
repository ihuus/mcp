# iHuus Schools — Gemini Extension

Search K-12 schools, look up school district boundaries, and explore performance ratings
for locations in California and Texas.

> **Data availability:** School data is available for **California and Texas** only.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

```bash
export IHUUS_API_KEY=your_ihuus_api_key_here
export GEMINI_API_KEY=your_gemini_api_key_here

gemini -e gemini-extension.json
```

Activate the skill at the start of your session:

```
/skill skills/schools-expert/SKILL.md
```

---

## Available Tools

| Tool | Description |
|---|---|
| `search/school-ratings` | Nearest K-12 schools with ratings, ordered by distance |
| `search/districts` | School districts overlapping a location |
| `search/school-by-district` | All schools belonging to a specific district (`lea_id`) |
| `school/{nces_id}` | Full school profile: enrollment, grades, rating, contact |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

School ratings are on a **1-10 scale**. Distances are returned in meters and converted to miles/feet.

---

## Example Prompts

```
What are the best elementary schools near 250 Mariposa Ave, Mountain View, CA?

Find all schools in the Palo Alto Unified School District.

What school district does 450 Serra Mall, Stanford, CA fall in?

Compare school ratings for two addresses in Houston, TX.
```
