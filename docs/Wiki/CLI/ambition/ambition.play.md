# ambition.play

Overview
==

- Starts (sets) a specific ambition item on the target character. Forced by default (valid id only); pass guard=true to require playability (age/condition/not-completed/not-already-playing).

Metadata
==

| Field | Value |
|---|---|
| Display | Play Ambition |
| Category | `ambition` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| ambition_item_id | name | yes | — | Ambition item ID to start (see ambition.get) |
| guard | bool | no | false | If true, require playability. Default false (force). |

Usage
==

```js
await inzoi.cli.execute('ambition.play', {
  entity_id: 0, // optional
  ambition_item_id: '',
  guard: false, // optional
});
```