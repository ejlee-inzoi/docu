# zoi.freeze

Overview
==

- Cancel current/queued interactions and disable autonomy. The character stays idle in place.

Metadata
==

| Field | Value |
|---|---|
| Display | Freeze Character |
| Category | `zoi` |
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
await inzoi.cli.execute('zoi.freeze', {
  entity_id: 0, // optional
});
```