# iHuus Full — Gemini Extension

All five iHuus intelligence domains in one extension: demographics, environment, risk,
schools, and vibe. The fastest way to generate a complete neighborhood analysis report.

> **Data availability:** School data covers **California and Texas**. Fire risk covers
> **California only** (CALFIRE). All other tools have national US coverage.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `full` as the `<domain>` value.

---

## Available Tools

| Server               | Tools                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| `ihuus-demographics` | `insurance-coverage` · `ideological-lean` · `population-profile`                                |
| `ihuus-environment`  | `noise-levels` · `industrial-proximity` · `air-quality`                                         |
| `ihuus-risk`         | `flood` · `fire` (CA only)                                                                      |
| `ihuus-schools`      | `search/school-ratings` · `search/districts` · `search/school-by-district` · `school/{nces_id}` |
| `ihuus-vibe`         | `walkability` · `privacy` · `visual-appeal` · `dog-friendliness` · `urban-rural`                |
| `ihuus-geospatial`   | `geocode-single`                                                                                |

---

## Example Prompts

```
Give me a full neighborhood report for 250 Mariposa Ave, Mountain View, CA.

Compare two addresses I'm considering for my family — schools, safety, and walkability.

What's the overall quality of life like near downtown Austin, TX?

Is 450 Serra Mall, Stanford, CA a good area for dog owners with kids?
```
