# skill.get_all

Overview
==

- Returns all skills with current level, max level, and localized name for the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Get All Skills |
| Category | `skill` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('skill.get_all', {
  entity_id: 0, // optional
});
```