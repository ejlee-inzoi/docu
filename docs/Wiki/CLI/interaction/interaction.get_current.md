# interaction.get_current

Overview
==

- Returns information about the character's currently playing interaction: interaction_bag_id, state (Waiting/StandBy/Playing), action_type, target, remaining time, and queue count.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Current Interaction |
| Category | `interaction` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('interaction.get_current', {
  entity_id: 0, // optional
});
```