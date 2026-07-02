# career.can_promote

Overview
==

- Returns whether the character has a Business career and is eligible for promotion (rank below max). Non-mutating; safe to poll.

Metadata
==

| Field | Value |
|---|---|
| Display | Can Promote |
| Category | `career` |
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
await inzoi.cli.execute('career.can_promote', {
  entity_id: 0, // optional
});
```