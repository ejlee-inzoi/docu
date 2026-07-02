# building.set_object_location

Overview
==

- [Build Mode Only] [Object Selection] Sets the location of selected game object(s) relative to the parent site. Omitted axes keep their current value. Supports multi-selection.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Location |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `SetObjectLocation` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| x | float | no | — | X position |
| y | float | no | — | Y position |
| z | float | no | — | Z position |
| entity_id | entityId | no | — | Target entity ID (optional, defaults to selected object) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

Usage
==

```js
await inzoi.cli.execute('building.set_object_location', {
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```