# build.reset_material

Overview
==

- Reset material parameters to default. If part_index is specified, resets only that part. Otherwise resets all parts.

Metadata
==

| Field | Value |
|---|---|
| Display | Reset Material |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID |
| part_index | int | no | — | Part index to reset (default: all parts) |

Usage
==

```js
await inzoi.cli.execute('build.reset_material', {
  entity_id: 0,
  part_index: 0, // optional
});
```