# iHuus Environment — Gemini Extension

Assess the environmental quality of any US neighborhood — noise levels, industrial
proximity, and air quality.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `environment` as the `<domain>` value.

---

## Available Tools

| Tool                   | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `noise-levels`         | Serenity score with road, rail, and aviation source breakdown       |
| `industrial-proximity` | Distance and hazard rating for nearby industrial sites              |
| `air-quality`          | Air quality safety score from monitoring station data               |
| `geocode-single`       | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
How noisy is the area around 250 Mariposa Ave, Mountain View, CA?

Rate the environmental quality near 450 Serra Mall, Stanford, CA.

Is there any industrial activity near 1100 Congress Ave, Austin, TX?

Compare the air quality between downtown San Francisco and suburban Palo Alto.
```
