# emotion.get_current

Overview
==

- Returns the current emotion type and level for the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Current Emotion |
| Category | `emotion` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('emotion.get_current', {
  entity_id: 0, // optional
});
```