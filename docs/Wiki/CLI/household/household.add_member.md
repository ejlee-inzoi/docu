# household.add_member

Overview
==

- Transfer a character into the specified household. Removes from old household automatically.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Household Member |
| Category | `household` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character entity ID to transfer |
| household_id | entityId | no | — | Destination household entity ID (default: possessed character's household) |

Usage
==

```js
await inzoi.cli.execute('household.add_member', {
  entity_id: 0,
  household_id: 0, // optional
});
```