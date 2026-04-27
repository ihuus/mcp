# Gemini CLI Extensions

Ready-to-use [Gemini CLI](https://github.com/google-gemini/gemini-cli) extensions for the
iHuus Neighborhood Intelligence API.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Available Extensions

| Extension        | Folder                                  | Skill                  | Tools                                                                  |
| ---------------- | --------------------------------------- | ---------------------- | ---------------------------------------------------------------------- |
| **Demographics** | [`gemini/demographics/`](demographics/) | `demographics-advisor` | Insurance coverage · Ideological lean · Age profile                    |
| **Environment**  | [`gemini/environment/`](environment/)   | `environment-advisor`  | Noise levels · Industrial proximity · Air quality                      |
| **Risk**         | [`gemini/risk/`](risk/)                 | `risk-advisor`         | Flood safety · Fire risk (CA only)                                    |
| **Schools**      | [`gemini/schools/`](schools/)           | `schools-expert`       | School search · District lookup · School detail                        |
| **Vibe**         | [`gemini/vibe/`](vibe/)                 | `neighborhood-vibe`    | Walkability · Privacy · Visual appeal · Dog friendliness · Urban–rural |
| **Full**         | [`gemini/full/`](full/)                 | `neighborhood-analyst` | All of the above + geocoding                                           |

> **Data availability:** All tools currently cover **California and Texas**. Fire risk
> covers **California only** (CALFIRE).

---

## Setup

Replace `<domain>` below with your chosen extension folder (e.g. `vibe`, `schools`,
`full`).

### 1. Install Gemini CLI

```bash
npm install -g @google/gemini-cli
```

### 2. Clone the repo and set your API keys

```bash
git clone https://github.com/ihuus/mcp.git
cd mcp

export IHUUS_API_KEY=your_ihuus_api_key_here
export GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Link the extension

```bash
gemini extensions link gemini/<domain>
```

This is a one-time step. Gemini CLI loads the linked extension automatically in
every future session.

### 4. Start a session

```bash
gemini
```

The MCP tools are available immediately. Try:

```
How walkable is 250 Mariposa Ave, Mountain View, CA?
```

### 5. Activate a skill (optional)

Each extension includes a skill file that gives the agent domain expertise.
Once inside a Gemini session:

```
/skill gemini/<domain>/skills/<skill-name>/SKILL.md
```

For example:

```
/skill gemini/vibe/skills/neighborhood-vibe/SKILL.md
```

---

## Example Prompts

```
What are the best school districts near 250 Mariposa Ave, Mountain View, CA?

Rate the environmental quality near 450 Serra Mall, Stanford, CA.

Compare the walkability and privacy of two addresses in Austin, TX.

Is 123 Riverside Dr, Sacramento, CA a flood risk? What about wildfire?

Give me a full neighborhood report for 1100 Congress Ave, Austin, TX.
```

---

## How It Works

Each `gemini-extension.json` registers one or two remote MCP servers:

- **Domain server** (e.g. `ihuus-schools`) — domain-specific tools
- **`ihuus-geospatial`** — geocoding, converts addresses to coordinates

The Gemini CLI connects to these servers over HTTP using your `IHUUS_API_KEY`.

[View full API docs →](https://docs.ihuus.com/)
