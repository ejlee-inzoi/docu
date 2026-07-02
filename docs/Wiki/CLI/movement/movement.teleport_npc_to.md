# movement.teleport_npc_to

Overview
==

- Teleports a character to near another character. Unlike movement.teleport_to, neither character needs to be possessed.

Metadata
==

| Field | Value |
|---|---|
| Display | Teleport NPC To NPC |
| Category | `movement` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character to teleport |
| target_entity_id | entityId | yes | — | Destination character to teleport near |

Usage
==

```js
await inzoi.cli.execute('movement.teleport_npc_to', {
  entity_id: 0,
  target_entity_id: 0,
});
```