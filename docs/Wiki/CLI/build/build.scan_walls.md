# build.scan_walls

Overview
==

- List all walls in the current site with edge keys and positions. Works in both play mode (character must be inside a building) and build mode. Use the edge_key with build.set_wall_color.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Walls |
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
await inzoi.cli.execute('build.scan_walls', {
  floor_level: 0, // optional
});
```