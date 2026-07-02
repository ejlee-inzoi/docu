# movement.approach

Overview
==

- Walks the possessed character toward the specified target entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Approach Character |
| Category | `movement` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity ID to approach |

Usage
==

```js
await inzoi.cli.execute('movement.approach', {
  entity_id: 0,
});
```