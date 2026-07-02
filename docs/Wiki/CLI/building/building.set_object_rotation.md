# building.set_object_rotation

Overview
==

- [Build Mode Only] [Object Selection] Sets the rotation of selected game object(s). Omitted axes keep their current value. Supports multi-selection.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Rotation |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `SetObjectRotation` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| pitch | float | no | — | Pitch (degrees) |
| yaw | float | no | — | Yaw (degrees) |
| roll | float | no | — | Roll (degrees) |
| entity_id | entityId | no | — | Target entity ID (optional, defaults to selected object) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

Usage
==

```js
await inzoi.cli.execute('building.set_object_rotation', {
  pitch: 0.0, // optional
  yaw: 0.0, // optional
  roll: 0.0, // optional
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```