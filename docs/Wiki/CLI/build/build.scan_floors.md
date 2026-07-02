# build.scan_floors

Overview
==

- List all floors and rooms in the current site with room indices and positions. Works in both play mode (character must be inside a building) and build mode. Use room_index with build.set_floor_color / build.set_floor_material.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Floors |
| Category | `build` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| floor_level | int | no | — | Filter by floor level (default: all floors) |

Usage
==

```js
await inzoi.cli.execute('build.scan_floors', {
  floor_level: 0, // optional
});
```