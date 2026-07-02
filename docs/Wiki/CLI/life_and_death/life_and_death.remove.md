# life_and_death.remove

Overview
==

- Remove the specified Zoi entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Zoi |
| Category | `life_and_death` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `RemoveZoi`, `zoi.remove` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Entity ID to remove (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('life_and_death.remove', {
  entity_id: 0, // optional
});
```