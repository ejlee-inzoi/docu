# status_and_health.cure_illness

Overview
==

- Cures all illnesses on the current character.

Metadata
==

| Field | Value |
|---|---|
| Display | Cure Illness |
| Category | `status_and_health` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `CureIllness`, `health.cure_illness` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('status_and_health.cure_illness', {
  entity_id: 0, // optional
});
```