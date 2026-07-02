# entity.get_simulate_state

Overview
==

- Check whether a character entity is currently simulated (spawned on-screen). Supports batch query via comma-separated entity_ids.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Simulate State |
| Category | `entity` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Single entity ID to check |
| entity_ids | string | no | — | Comma-separated entity IDs for batch query |

Usage
==

```js
await inzoi.cli.execute('entity.get_simulate_state', {
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```