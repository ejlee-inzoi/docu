# entity.get_info

Overview
==

- [deprecated] Use entity.get_character_info instead.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Entity Info (→ get_character_info) |
| Category | `entity` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('entity.get_info', {
  entity_id: 0, // optional
});
```