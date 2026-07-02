# household.get_members

Overview
==

- Returns all members of a household. If household_id is omitted, uses the possessed character's household.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Household Members |
| Category | `household` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| household_id | entityId | no | — | Target household entity ID (default: possessed character's household) |

Usage
==

```js
await inzoi.cli.execute('household.get_members', {
  household_id: 0, // optional
});
```