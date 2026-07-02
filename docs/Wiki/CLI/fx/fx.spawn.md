# fx.spawn

Overview
==

- Spawns an FX table entry at an explicit world transform or attached to an entity. Spawner-backed montage FX are played through a transient B1FXSpawnActor at the requested transform.

Metadata
==

| Field | Value |
|---|---|
| Display | Spawn FX |
| Category | `fx` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fx_id | name | yes | — | FX table row ID |
| entity_id | entityId | no | — | Optional target entity ID. If omitted, transform is world-space. |
| socket | name | no | — | Optional socket name for entity attachment |
| x | float | no | — | X location. Required for world-space spawn, relative otherwise. |
| y | float | no | — | Y location. Required for world-space spawn, relative otherwise. |
| z | float | no | — | Z location. Required for world-space spawn, relative otherwise. |
| pitch | float | no | 0 | Pitch in degrees |
| yaw | float | no | 0 | Yaw in degrees |
| roll | float | no | 0 | Roll in degrees |
| scale | float | no | 1 | Uniform scale |
| scale_x | float | no | — | X scale override |
| scale_y | float | no | — | Y scale override |
| scale_z | float | no | — | Z scale override |
| with_handle | bool | no | false | Register the FX with B1 FX handles |

Usage
==

```js
await inzoi.cli.execute('fx.spawn', {
  fx_id: '',
  entity_id: 0, // optional
  socket: '', // optional
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  pitch: 0, // optional
  yaw: 0, // optional
  roll: 0, // optional
  scale: 1, // optional
  scale_x: 0.0, // optional
  scale_y: 0.0, // optional
  scale_z: 0.0, // optional
  with_handle: false, // optional
});
```