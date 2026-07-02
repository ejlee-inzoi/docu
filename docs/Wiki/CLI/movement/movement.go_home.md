# movement.go_home

Overview
==

- Teleports the specified character to their home site.

Metadata
==

| Field | Value |
|---|---|
| Display | Go Home |
| Category | `movement` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `GoHome`, `world.go_home` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('movement.go_home', {
  entity_id: 0, // optional
});
```