# building.set_object_transform

Overview
==

- [Build Mode Only] [Object Selection] Sets location, rotation, and/or scale of selected game object(s) relative to the parent site in one call. All parameters are optional; omitted values keep their current state. Supports multi-selection.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Transform |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `SetObjectTransform` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| loc_x | float | no | — | X position |
| loc_y | float | no | — | Y position |
| loc_z | float | no | — | Z position |
| pitch | float | no | — | Pitch (degrees) |
| yaw | float | no | — | Yaw (degrees) |
| roll | float | no | — | Roll (degrees) |
| scale | float | no | — | Uniform scale |
| scale_x | float | no | — | X-axis scale |
| scale_y | float | no | — | Y-axis scale |
| scale_z | float | no | — | Z-axis scale |
| entity_id | entityId | no | — | Target entity ID (optional, defaults to selected object) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

Usage
==

```js
await inzoi.cli.execute('building.set_object_transform', {
  loc_x: 0.0, // optional
  loc_y: 0.0, // optional
  loc_z: 0.0, // optional
  pitch: 0.0, // optional
  yaw: 0.0, // optional
  roll: 0.0, // optional
  scale: 0.0, // optional
  scale_x: 0.0, // optional
  scale_y: 0.0, // optional
  scale_z: 0.0, // optional
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```