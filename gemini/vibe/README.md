# iHuus Vibe — Gemini Extension

Explore the character and quality of life of any US neighborhood — walkability, privacy,
visual appeal, dog friendliness, and urban-rural classification.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `vibe` as the `<domain>` value.

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

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
How walkable is the area around 250 Mariposa Ave, Mountain View, CA?

Is 90210 Beverly Hills more of an urban or suburban vibe?

Find me the most private, low-density neighborhood near downtown Austin, TX.

Rate the visual appeal of 450 Serra Mall, Stanford, CA.
```
```
