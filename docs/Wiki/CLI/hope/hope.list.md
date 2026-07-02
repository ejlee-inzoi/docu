# hope.list

Overview
==

- Returns the target character's currently selected hopes (wishes): hope_id, expire tick, fixed flag.

Metadata
==

| Field | Value |
|---|---|
| Display | List Hopes |
| Category | `hope` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('hope.list', {
  entity_id: 0, // optional
});
```