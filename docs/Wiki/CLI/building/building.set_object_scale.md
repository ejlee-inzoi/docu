# building.set_object_scale

Overview
==

- [Build Mode Only] [Object Selection] Sets the scale of selected game object(s). Use 'scale' for uniform scaling, or 'x','y','z' for per-axis. Supports multi-selection.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Scale |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `SetObjectScale` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| scale | float | no | — | Uniform scale (used for all axes unless x/y/z specified) |
| x | float | no | — | X-axis scale |
| y | float | no | — | Y-axis scale |
| z | float | no | — | Z-axis scale |
| entity_id | entityId | no | — | Target entity ID (optional, defaults to selected object) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

Usage
==

```js
await inzoi.cli.execute('building.set_object_scale', {
  scale: 0.0, // optional
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```