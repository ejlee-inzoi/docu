# household.remove_member

Overview
==

- Remove a character from their current household.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Household Member |
| Category | `household` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character entity ID to remove |

Usage
==

```js
await inzoi.cli.execute('household.remove_member', {
  entity_id: 0,
});
```