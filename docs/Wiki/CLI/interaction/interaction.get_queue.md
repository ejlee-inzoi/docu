# interaction.get_queue

Overview
==

- Returns the interaction queue status: queue count, whether it's empty, and the currently playing interaction info.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Interaction Queue |
| Category | `interaction` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('interaction.get_queue', {
  entity_id: 0, // optional
});
```