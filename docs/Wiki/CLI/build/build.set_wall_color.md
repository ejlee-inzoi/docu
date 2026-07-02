# build.set_wall_color

Overview
==

- Change wall color. Works in both play mode (character must be inside a building) and build mode. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. Use floor_level to filter. side: front, back, or both (default).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Wall Color |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| color | string | yes | — | Color value: hex (#0000FF) or name (blue) |
| edge_key | int | no | — | Specific wall edge key (from build.scan_walls). Omit for all walls. |
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| side | string | no | both | Which side: front, back, or both (default: both) |

Usage
==

```js
await inzoi.cli.execute('build.set_wall_color', {
  color: '',
  edge_key: 0, // optional
  floor_level: 0, // optional
  side: 'both', // optional
});
```