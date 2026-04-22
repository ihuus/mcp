# Gemini CLI Extensions

Ready-to-use [Gemini CLI](https://github.com/google-gemini/gemini-cli) extensions for the
iHuus Neighborhood Intelligence API.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Setup

### 1. Install Gemini CLI

```bash
npm install -g @google/gemini-cli
```

### 2. Set your API keys

```bash
# From the repo root
export $(grep -v '^#' .env | xargs)

# Or export individually
export IHUUS_API_KEY=your_ihuus_api_key_here
export GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Start a session

```bash
# Pass the extension file for the domain you want
gemini -e gemini/schools/gemini-extension.json

# Or load all domains at once
gemini -e gemini/full/gemini-extension.json
```

### 4. Activate a skill (optional)

Each extension ships with a skill file that primes the agent with domain expertise.
Activate it at the start of a session:

```
/skill gemini/<domain>/skills/<skill-name>/SKILL.md
```

---

## Available Extensions

| Folder | Skill | What it does |
|---|---|---|
| `demographics/` | `demographics-advisor` | Insurance coverage, political lean, age profile |
| `environment/` | `environment-advisor` | Noise, industrial proximity, air quality |
| `risk/` | `risk-advisor` | Flood safety, fire risk (CA only) |
| `schools/` | `schools-expert` | School search, ratings, district lookup |
| `vibe/` | `neighborhood-vibe` | Walkability, privacy, visual appeal, and more |
| `full/` | `neighborhood-analyst` | All domains — holistic neighborhood report |

---

## Example Prompts

```
What are the best school districts near 250 Mariposa Ave, Mountain View, CA?

Rate the environmental quality near 1600 Pennsylvania Ave NW, Washington, DC.

Compare the walkability and privacy of two addresses for me.

Is 123 Riverside Dr, Sacramento, CA a flood risk? What about wildfire?
```

---

## How It Works

Each `gemini-extension.json` registers one or two remote MCP servers:

- **Domain server** (e.g. `ihuus-schools`) — domain-specific tools
- **`ihuus-geospatial`** — geocoding, converts addresses to coordinates

The Gemini CLI connects to these servers over HTTP using your `IHUUS_API_KEY`.

[View full API docs →](https://docs.ihuus.com/)
