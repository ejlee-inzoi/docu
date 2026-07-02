# ambition.get

Overview
==

- Returns the target character's ambition state: currently playing ambition item, current step, completed count, all-completed flag, and playable ambition item ids.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Ambition |
| Category | `ambition` |
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
await inzoi.cli.execute('ambition.get', {
  entity_id: 0, // optional
});
```