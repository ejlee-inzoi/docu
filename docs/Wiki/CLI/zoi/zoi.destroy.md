# zoi.destroy

Overview
==

- Instantly destroy a character. Removes from household and despawns without death lifecycle.

Metadata
==

| Field | Value |
|---|---|
| Display | Destroy Character |
| Category | `zoi` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character entity ID to destroy |

Usage
==

```js
await inzoi.cli.execute('zoi.destroy', {
  entity_id: 0,
});
```