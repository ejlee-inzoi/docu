# build.set_wall_material

Overview
==

- Change wall material preset. If material_group/material_index are omitted, a random valid preset is chosen. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. color is optional and applied on top.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Wall Material |
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
| edge_key | int | no | — | Specific wall edge key. Omit for all walls. |
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| side | string | no | both | Which side: front, back, or both (default: both) |

Usage
==

```js
await inzoi.cli.execute('build.set_wall_material', {
  material_group: 0, // optional
  material_index: 0, // optional
  color: '', // optional
  edge_key: 0, // optional
  floor_level: 0, // optional
  side: 'both', // optional
});
```