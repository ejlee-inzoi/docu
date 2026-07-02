# build.set_floor_material

Overview
==

- Change floor (or ceiling) material preset. If material_group/material_index are omitted, a random valid preset is chosen. Specify floor_level/room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Floor Material |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| material_group | int | no | — | Material group index (default: random) |
| material_index | int | no | — | Material index within group (default: random) |
| color | string | no | — | Optional tint color (hex or name) |
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| room_index | int | no | — | Room index within floor (from build.scan_floors). Omit for all rooms. |
| target | string | no | floor | floor (default) or ceiling |

Usage
==

```js
await inzoi.cli.execute('build.set_floor_material', {
  material_group: 0, // optional
  material_index: 0, // optional
  color: '', // optional
  floor_level: 0, // optional
  room_index: 0, // optional
  target: 'floor', // optional
});
```