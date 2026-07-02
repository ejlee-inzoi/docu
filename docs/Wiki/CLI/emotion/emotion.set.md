# emotion.set

Overview
==

- Sets the cheat emotion on the target character. Use 'Normal' or empty to clear. e.g. type=Happy level=3

Metadata
==

| Field | Value |
|---|---|
| Display | Set Emotion |
| Category | `emotion` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| type | name | yes | — | Emotion type name (e.g. Happy, Sad, Normal) |
| level | int | no | 1 | Emotion level (default: 1) |

Usage
==

```js
await inzoi.cli.execute('emotion.set', {
  entity_id: 0, // optional
  type: '',
  level: 1, // optional
});
```