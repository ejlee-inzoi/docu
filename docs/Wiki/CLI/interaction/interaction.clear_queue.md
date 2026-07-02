# interaction.clear_queue

Overview
==

- Clears all queued interactions. By default keeps the currently playing interaction; set cancel_current=true to also cancel it.

Metadata
==

| Field | Value |
|---|---|
| Display | Clear Interaction Queue |
| Category | `interaction` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |
| cancel_current | bool | no | false | Also cancel the currently playing interaction |

Usage
==

```js
await inzoi.cli.execute('interaction.clear_queue', {
  entity_id: 0, // optional
  cancel_current: false, // optional
});
```