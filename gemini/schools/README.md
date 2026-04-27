# iHuus Schools — Gemini Extension

Search K-12 schools, look up school district boundaries, and explore performance ratings
for locations in California and Texas.

> **Data availability:** School data is available for **California and Texas** only.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `schools` as the `<domain>` value.

---

## Available Tools

| Tool                        | Description                                                         |
| --------------------------- | ------------------------------------------------------------------- |
| `search/school-ratings`     | Nearest K-12 schools with ratings, ordered by distance              |
| `search/districts`          | School districts overlapping a location                             |
| `search/school-by-district` | All schools belonging to a specific district (`lea_id`)             |
| `school/{nces_id}`          | Full school profile: enrollment, grades, rating, contact            |
| `geocode-single`            | Convert an address to coordinates (required before all other tools) |

School ratings are on a **1-10 scale**. Distances are returned in meters and converted to miles/feet.

---

## Example Prompts

```
What are the best elementary schools near 250 Mariposa Ave, Mountain View, CA?

Find all schools in the Palo Alto Unified School District.

What school district does 450 Serra Mall, Stanford, CA fall in?

Compare school ratings for two addresses in Houston, TX.
```

Compare school ratings for two addresses in Houston, TX.

```

```
