# household.list

Overview
==

- Returns households with member counts and residence info. Defaults to residential families only (bCanMoveIn=true and a residence site is connected). Pass include=all to include game-internal NPC households and households without a residence site.

Metadata
==

| Field | Value |
|---|---|
| Display | List Households |
| Category | `household` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | int | no | — | Max households to return (default: 50) |
| offset | int | no | — | Skip first N households (default: 0) |
| include | string | no | — | Filter: residential (default, bCanMoveIn=true and residence site connected) or all |

Usage
==

```js
await inzoi.cli.execute('household.list', {
  limit: 0, // optional
  offset: 0, // optional
  include: '', // optional
});
```