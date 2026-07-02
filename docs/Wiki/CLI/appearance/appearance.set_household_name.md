# appearance.set_household_name

Overview
==

- Set the active household name.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Household Name |
| Category | `appearance` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `setHouseholdName`, `zoi.set_household_name` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| name | string | yes | — | Household name |

Usage
==

```js
await inzoi.cli.execute('appearance.set_household_name', {
  entity_id: 0, // optional
  name: '',
});
```