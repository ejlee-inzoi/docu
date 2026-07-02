# entity.get_object_info

Overview
==

- Returns detailed info for a game object: data table ID, category, tags, asset path, template, mesh components, and location.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Object Info |
| Category | `entity` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Entity ID of the game object |

Usage
==

```js
await inzoi.cli.execute('entity.get_object_info', {
  entity_id: 0,
});
```