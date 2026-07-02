# movement.teleport

Overview
==

- Teleports the specified character to a destination site or world coordinates.

Metadata
==

| Field | Value |
|---|---|
| Display | Teleport |
| Category | `movement` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `Teleport`, `world.teleport` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| destination | string | no | — | Destination site ID, or FVector string like 'X=-1 Y=-2 Z=-3' |
| x | float | no | — | World X coordinate (requires y and z) |
| y | float | no | — | World Y coordinate (requires x and z) |
| z | float | no | — | World Z coordinate (requires x and y) |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('movement.teleport', {
  destination: '', // optional
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  entity_id: 0, // optional
});
```