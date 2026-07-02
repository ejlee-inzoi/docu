# interaction.cancel

Overview
==

- Cancels the currently playing interaction. Does NOT disable autonomy (unlike zoi.freeze). The character will proceed to the next queued interaction or go idle.

Metadata
==

| Field | Value |
|---|---|
| Display | Cancel Current Interaction |
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

Usage
==

```js
await inzoi.cli.execute('interaction.cancel', {
  entity_id: 0, // optional
});
```