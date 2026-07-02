# build.scan_objects

Overview
==

- List game objects placed in the current site with their entity IDs, table IDs, floor levels, and locations. Works in both play mode (character must be inside a building) and build mode. Use the entity_id with build.remove_object or any build.* customization command.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Placed Objects |
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
| deletable_only | bool | no | — | Only include objects that can be removed (excludes dev-locked and non-deletable). Default: false |
| limit | int | no | — | Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count. |

Usage
==

```js
await inzoi.cli.execute('build.scan_objects', {
  floor_level: 0, // optional
  deletable_only: false, // optional
  limit: 0, // optional
});
```