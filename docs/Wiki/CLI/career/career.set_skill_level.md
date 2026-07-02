# career.set_skill_level

Overview
==

- Sets a skill to the given level by skill name.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Skill Level |
| Category | `career` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetSkillLevel`, `job.set_skill_level` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| skill_name | name | yes | — | Skill id |
| level | int | yes | — | Skill level |

Usage
==

```js
await inzoi.cli.execute('career.set_skill_level', {
  entity_id: 0, // optional
  skill_name: '',
  level: 0,
});
```