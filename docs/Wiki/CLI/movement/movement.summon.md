# movement.summon

Overview
==

- Teleports the target character to near the possessed character.

Metadata
==

| Field | Value |
|---|---|
| Display | Summon Character |
| Category | `movement` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity ID to summon |

Usage
==

```js
await inzoi.cli.execute('movement.summon', {
  entity_id: 0,
});
```