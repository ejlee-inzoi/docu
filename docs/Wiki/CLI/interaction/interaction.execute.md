# interaction.execute

Overview
==

- Queues a specific interaction on a character by InteractionBagId. The character will walk to the target and perform the interaction.

Metadata
==

| Field | Value |
|---|---|
| Display | Execute Interaction |
| Category | `interaction` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID that performs the interaction (default: possessed) |
| interaction_bag_id | name | yes | — | InteractionBag row name from data table (e.g. Sit, Talk, Cook) |
| target_entity_id | entityId | no | — | Target entity ID for the interaction (character or object) |
| insert_front | bool | no | false | Insert at front of interaction queue instead of back |

Usage
==

```js
await inzoi.cli.execute('interaction.execute', {
  entity_id: 0, // optional
  interaction_bag_id: '',
  target_entity_id: 0, // optional
  insert_front: false, // optional
});
```