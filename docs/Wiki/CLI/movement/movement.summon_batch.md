# movement.summon_batch

Overview
==

- Teleports multiple characters to near the possessed character. Possessed character is automatically excluded.

Metadata
==

| Field | Value |
|---|---|
| Display | Summon Multiple Characters |
| Category | `movement` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_ids | string | yes | — | Comma-separated entity IDs to summon |

Usage
==

```js
await inzoi.cli.execute('movement.summon_batch', {
  entity_ids: '',
});
```