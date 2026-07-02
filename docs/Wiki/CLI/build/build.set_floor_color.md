# build.set_floor_color

Overview
==

- Change floor (or ceiling) color. Works in both play mode (character must be inside a building) and build mode. Specify floor_level and/or room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Floor Color |
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
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| room_index | int | no | — | Room index within floor (from build.scan_floors). Omit for all rooms. |
| target | string | no | floor | floor (default) or ceiling |

Usage
==

```js
await inzoi.cli.execute('build.set_floor_color', {
  color: '',
  floor_level: 0, // optional
  room_index: 0, // optional
  target: 'floor', // optional
});
```