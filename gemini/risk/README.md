# iHuus Risk — Gemini Extension

Assess natural hazard risk — flood safety and wildfire risk — for any US address.

> **Data availability:** Flood risk has national US coverage. Fire risk data is available
> for **California only** (CALFIRE).

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
/skill skills/risk-advisor/SKILL.md
```

---

## Available Tools

| Tool | Description | Coverage |
|---|---|---|
| `flood` | FEMA flood hazard designations and risk score | National |
| `fire` | CALFIRE Fire Hazard Severity Zone score | California only |
| `geocode-single` | Convert an address to coordinates (required before all other tools) | National |

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
Is this house at 123 Riverside Dr, Sacramento, CA at flood or fire risk?

What's the flood risk for a property near the Mississippi River in New Orleans?

Compare flood risk between two addresses I'm considering in Houston, TX.

Assess the fire hazard severity zone for 250 Mariposa Ave, Mountain View, CA.
```
