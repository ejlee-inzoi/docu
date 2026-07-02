# skill.set_level

Overview
==

- Sets a skill to the given level on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Skill Level |
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
| level | int | yes | — | Target level |

Usage
==

```js
await inzoi.cli.execute('skill.set_level', {
  entity_id: 0, // optional
  skill_id: '',
  level: 0,
});
```