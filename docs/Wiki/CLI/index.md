# CLI

Overview
==

A **CLI command** is a single, named game action that can be invoked by id with an explicit parameter list - for example, setting the current Zoi's mood, fast-forwarding the in-game clock, or spawning an object. Each command has a stable contract, so external code can drive the simulation safely without poking at internal data directly.

The inZOI CLI is a standalone integration layer, not bound to any single host language. The same command catalog is reachable from every embedded runtime that ships with the game - JavaScript inside UI Mods, Lua scripts, and other host environments - each via its own invoke API. UI Mods are just one common caller; the parameter contracts described on these pages apply unchanged everywhere else.

Pick a category below to see its commands. Each command has its own page with parameters and a usage example.

Categories
==

| Category | Commands |
|---|---|
| [ambition](ambition/index.md) | 3 |
| [appearance](appearance/index.md) | 30 |
| [autonomy](autonomy/index.md) | 2 |
| [bag](bag/index.md) | 2 |
| [bio](bio/index.md) | 1 |
| [buff](buff/index.md) | 2 |
| [build](build/index.md) | 13 |
| [building](building/index.md) | 11 |
| [camera](camera/index.md) | 3 |
| [career](career/index.md) | 10 |
| [character](character/index.md) | 1 |
| [cleaning](cleaning/index.md) | 3 |
| [cli](cli/index.md) | 2 |
| [contacts](contacts/index.md) | 1 |
| [currency](currency/index.md) | 3 |
| [curseforge](curseforge/index.md) | 5 |
| [data](data/index.md) | 6 |
| [disaster](disaster/index.md) | 1 |
| [emotion](emotion/index.md) | 3 |
| [entity](entity/index.md) | 19 |
| [environment](environment/index.md) | 14 |
| [event](event/index.md) | 2 |
| [facial](facial/index.md) | 2 |
| [fx](fx/index.md) | 1 |
| [gameplay](gameplay/index.md) | 4 |
| [gedcom](gedcom/index.md) | 1 |
| [graphics](graphics/index.md) | 5 |
| [hope](hope/index.md) | 10 |
| [household](household/index.md) | 6 |
| [illness](illness/index.md) | 1 |
| [interaction](interaction/index.md) | 7 |
| [l10n](l10n/index.md) | 1 |
| [life_and_death](life_and_death/index.md) | 3 |
| [marriage](marriage/index.md) | 4 |
| [mod](mod/index.md) | 1 |
| [motion](motion/index.md) | 6 |
| [movement](movement/index.md) | 9 |
| [needs](needs/index.md) | 3 |
| [object](object/index.md) | 1 |
| [optimization](optimization/index.md) | 3 |
| [pregnancy_and_birth](pregnancy_and_birth/index.md) | 3 |
| [quality_of_life](quality_of_life/index.md) | 3 |
| [relationships](relationships/index.md) | 9 |
| [schedule](schedule/index.md) | 1 |
| [settings](settings/index.md) | 3 |
| [simulation](simulation/index.md) | 5 |
| [site](site/index.md) | 1 |
| [skill](skill/index.md) | 3 |
| [smartbuild](smartbuild/index.md) | 12 |
| [social_event](social_event/index.md) | 4 |
| [sound](sound/index.md) | 3 |
| [stat](stat/index.md) | 6 |
| [status_and_health](status_and_health/index.md) | 2 |
| [system](system/index.md) | 1 |
| [toast](toast/index.md) | 2 |
| [uimod](uimod/index.md) | 12 |
| [view](view/index.md) | 4 |
| [visual](visual/index.md) | 6 |
| [weather](weather/index.md) | 1 |
| [world](world/index.md) | 2 |
| [zoi](zoi/index.md) | 2 |
| [zoi_group](zoi_group/index.md) | 9 |
| **Total** | **299** |

Calling a command
==

Every host runtime exposes its own invoke API, but the shape is always the same: pass a command id and a parameter object. The snippet below uses the JavaScript binding from a UI Mod - other hosts (Lua, etc.) provide an equivalent call.

```js
// Example host: a UI Mod's JavaScript.
await window.inzoi.cli.execute('<command-id>', { /* params */ });
```
