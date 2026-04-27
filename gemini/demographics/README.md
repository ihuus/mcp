# iHuus Demographics — Gemini Extension

Analyze neighborhood demographic profiles — health insurance coverage, ideological lean,
and population age mix — for any US location.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `demographics` as the `<domain>` value.

---

## Available Tools

| Tool                 | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `insurance-coverage` | Share of residents with health insurance (national coverage)        |
| `ideological-lean`   | Conservative–liberal political lean score                           |
| `population-profile` | Age mix from young adults to seniors                                |
| `geocode-single`     | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
What's the demographic profile of 250 Mariposa Ave, Mountain View, CA?

How conservative is the neighborhood around 450 Serra Mall, Stanford, CA?

What age group dominates the population near 1100 Congress Ave, Austin, TX?

What's the health insurance coverage rate near 123 Riverside Dr, Sacramento, CA?
```
