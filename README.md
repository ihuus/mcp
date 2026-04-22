# iHuus Neighborhood Intelligence — AI Extensions

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-brightgreen.svg)](https://modelcontextprotocol.io/)
[![api_advanced plan](https://img.shields.io/badge/plan-api__advanced-orange.svg)](https://ihuus.com/pricing)

Ready-to-use [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) extensions
for building AI-powered neighborhood analysis agents. Connect
[Gemini CLI](https://github.com/google-gemini/gemini-cli) or
[Claude Desktop](https://claude.ai/download) to remote MCP servers that provide
walkability scores, school ratings, flood risk, air quality, demographics, and more for
any US address — no backend code required.

**[Documentation](https://docs.ihuus.com/)** · **[Plans & Pricing](https://ihuus.com/pricing)**

---

## Prerequisites

| Requirement        | Details                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| **iHuus API key**  | `api_advanced` plan required — [get one at ihuus.com/pricing](https://ihuus.com/pricing)                   |
| **Gemini CLI**     | For extensions under `gemini/` — [install guide](https://github.com/google-gemini/gemini-cli#installation) |
| **Claude Desktop** | For configs under `claude/` — [download](https://claude.ai/download)                                       |

---

## Quick Start

```bash
# 1. Copy the env template
cp .env.example .env

# 2. Fill in your keys
#    IHUUS_API_KEY  → https://ihuus.com/pricing
#    GEMINI_API_KEY → https://aistudio.google.com/apikey
#    ANTHROPIC_API_KEY → https://console.anthropic.com/

# 3. Load variables into your shell
export $(grep -v '^#' .env | xargs)
```

---

## Extension Coverage

| Domain                 | Gemini | Claude | Tools Included                                                         |
| ---------------------- | :----: | :----: | ---------------------------------------------------------------------- |
| **Demographics**       |   ✓    |   ✓    | Insurance coverage · Ideological lean · Age profile                    |
| **Environment**        |   ✓    |   ✓    | Noise levels · Industrial proximity · Air quality                      |
| **Risk**               |   ✓    |   ✓    | Flood safety (national) · Fire risk (CA only)                          |
| **Schools**            |   ✓    |   ✓    | School search · District lookup · School detail                        |
| **Vibe**               |   ✓    |   ✓    | Walkability · Privacy · Visual appeal · Dog friendliness · Urban–rural |
| **Full (all domains)** |   ✓    |   ✓    | All of the above + geocoding                                           |

> **Data availability:** School data covers **California and Texas**. Fire risk covers
> **California only** (CALFIRE). All other tools have national US coverage.

---

## Repository Structure

```
.
├── .env.example           # Auth template — copy to .env and fill in your keys
├── gemini/                # Gemini CLI extensions
│   ├── demographics/
│   ├── environment/
│   ├── full/              # All domains in one extension
│   ├── risk/
│   ├── schools/
│   └── vibe/
└── claude/                # Claude Desktop MCP configurations
    ├── demographics/
    ├── environment/
    ├── full/              # All domains in one config
    ├── risk/
    ├── schools/
    └── vibe/
```

---

## Gemini CLI — Getting Started

See [`gemini/README.md`](gemini/README.md) for detailed setup instructions.

```bash
# Start a neighborhood analysis session
gemini -e gemini/schools/gemini-extension.json
```

---

## Claude Desktop — Getting Started

See [`claude/README.md`](claude/README.md) for detailed setup instructions.

Each `claude/*/claude_desktop_config.json` contains the MCP server block to merge into
your Claude Desktop configuration.

---

## Authentication

All extensions authenticate using your **iHuus API key** via a Bearer token:

```
Authorization: Bearer $IHUUS_API_KEY
```

The `$IHUUS_API_KEY` environment variable is read at runtime by both Gemini CLI and
Claude Desktop. Set it once in your shell (or `.env`) and all extensions share it.

[Get your API key →](https://ihuus.com/pricing)

---

## More Resources

- [Full API Documentation](https://docs.ihuus.com/)
- [Plans & Pricing](https://ihuus.com/pricing)
- [iHuus Website](https://ihuus.com/)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)

---

## Feedback

This repository does not accept external pull requests at this time. For feedback, bug
reports, or feature requests, please email **contact@ihuus.com**.
