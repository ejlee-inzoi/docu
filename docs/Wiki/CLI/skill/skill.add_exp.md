# skill.add_exp

Overview
==

- Adds experience to a skill on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Skill EXP |
| Category | `skill` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| skill_id | name | yes | — | Skill ID |
| exp | float | yes | — | EXP amount to add |

Usage
==

```js
await inzoi.cli.execute('skill.add_exp', {
  entity_id: 0, // optional
  skill_id: '',
  exp: 0.0,
});
```