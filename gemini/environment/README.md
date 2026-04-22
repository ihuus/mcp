# iHuus Environment — Gemini Extension

Assess the environmental quality of any US neighborhood — noise levels, industrial
proximity, and air quality.

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
/skill skills/environment-advisor/SKILL.md
```

---

## Available Tools

| Tool | Description |
|---|---|
| `noise-levels` | Serenity score with road, rail, and aviation source breakdown |
| `industrial-proximity` | Distance and hazard rating for nearby industrial sites |
| `air-quality` | Air quality safety score from monitoring station data |
| `geocode-single` | Convert an address to coordinates (required before all other tools) |

All index scores are on a **0-255 scale**. The skill converts them to 1-10 automatically.

---

## Example Prompts

```
How noisy is the area around 1600 Pennsylvania Ave NW, Washington, DC?

Rate the environmental quality near 250 Mariposa Ave, Mountain View, CA.

Is there any industrial activity near 500 5th Ave, New York, NY?

Compare the air quality between downtown San Francisco and suburban Palo Alto.
```
