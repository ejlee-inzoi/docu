# buff.remove

Overview
==

- Removes a buff from the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Buff |
| Category | `buff` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| buff_id | name | yes | — | Buff ID to remove |

Usage
==

```js
await inzoi.cli.execute('buff.remove', {
  entity_id: 0, // optional
  buff_id: '',
});
```