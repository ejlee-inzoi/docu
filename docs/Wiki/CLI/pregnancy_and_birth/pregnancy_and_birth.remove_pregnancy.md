# pregnancy_and_birth.remove_pregnancy

Overview
==

- Removes the current pregnancy state.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Pregnancy |
| Category | `pregnancy_and_birth` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `RemovePregnancy`, `health.remove_pregnancy` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('pregnancy_and_birth.remove_pregnancy', {
  entity_id: 0, // optional
});
```