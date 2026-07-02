# household.possess

Overview
==

- Switches play to the specified household via normal client flow. Handles camera, spawn, and UI transition.

Metadata
==

| Field | Value |
|---|---|
| Display | Possess Household |
| Category | `household` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| household_id | entityId | yes | — | Household entity ID to switch to |

Usage
==

```js
await inzoi.cli.execute('household.possess', {
  household_id: 0,
});
```