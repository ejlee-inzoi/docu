# interaction.list_available

Overview
==

- Lists all available interactions for a target entity. Returns interaction_bag_id values that can be passed to interaction.execute. For objects: lists object interactions. For characters: lists talk/social interactions.

Metadata
==

| Field | Value |
|---|---|
| Display | List Available Interactions |
| Category | `interaction` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character performing the interaction (default: possessed) |
| target_entity_id | entityId | yes | — | Target entity ID (object or character) to list interactions for |

Usage
==

```js
await inzoi.cli.execute('interaction.list_available', {
  entity_id: 0, // optional
  target_entity_id: 0,
});
```