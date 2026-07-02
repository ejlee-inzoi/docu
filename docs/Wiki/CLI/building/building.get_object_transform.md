# building.get_object_transform

Overview
==

- [Build Mode Only] [Object Selection] Returns the current location, rotation, and scale of selected game object(s). Supports multi-selection.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Object Transform |
| Category | `building` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | `GetObjectTransform` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (optional, defaults to selected object) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

Usage
==

```js
await inzoi.cli.execute('building.get_object_transform', {
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```