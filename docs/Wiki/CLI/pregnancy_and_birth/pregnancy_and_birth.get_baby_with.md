# pregnancy_and_birth.get_baby_with

Overview
==

- Starts pregnancy with the given partner entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Baby With |
| Category | `pregnancy_and_birth` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `GetBabyWith`, `health.get_baby_with` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| partner_id | entityId | no | — | Partner entity ID (optional, defaults to spouse) |
| entity_id | entityId | no | — | Mother entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('pregnancy_and_birth.get_baby_with', {
  partner_id: 0, // optional
  entity_id: 0, // optional
});
```