# autonomy.diagnose_interaction

Overview
==

- Diagnose why an interaction bag is or is not an autonomy candidate.

Metadata
==

| Field | Value |
|---|---|
| Display | Diagnose Autonomy Interaction |
| Category | `autonomy` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| bag_id | name | yes | — | Interaction bag ID to diagnose |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| target_entity_id | entityId | no | — | Optional target entity ID for object/talk interactions |

Usage
==

```js
await inzoi.cli.execute('autonomy.diagnose_interaction', {
  bag_id: '',
  entity_id: 0, // optional
  target_entity_id: 0, // optional
});
```