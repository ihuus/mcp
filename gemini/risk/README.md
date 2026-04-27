# iHuus Risk — Gemini Extension

Assess natural hazard risk — flood safety and wildfire risk — for any US address.

> **Data availability:** All risk tools cover **California and Texas**. Fire risk data
> is available for **California only** (CALFIRE).

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

See [`gemini/README.md`](../README.md) for installation instructions.
Use `risk` as the `<domain>` value.

---

## Available Tools

| Tool             | Description                                                         | Coverage        |
| ---------------- | ------------------------------------------------------------------- | --------------- |
| `flood`          | FEMA flood hazard designations and risk score                       | CA and TX       |
| `fire`           | CALFIRE Fire Hazard Severity Zone score                             | California only |
| `geocode-single` | Convert an address to coordinates (required before all other tools) | National        |

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
Is this house at 123 Riverside Dr, Sacramento, CA at flood or fire risk?

What's the flood risk for a property near downtown Houston, TX?

Compare flood risk between two addresses I'm considering in Austin, TX.

Assess the fire hazard severity zone for 250 Mariposa Ave, Mountain View, CA.
```
