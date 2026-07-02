# movement.teleport_to

Overview
==

- Teleports the possessed character near the specified target entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Teleport To Character |
| Category | `movement` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity ID to teleport to |

Usage
==

```js
await inzoi.cli.execute('movement.teleport_to', {
  entity_id: 0,
});
```