# facial.set

Overview
==

- Sets the visual facial expression on a B1 character.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Facial Expression |
| Category | `facial` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| expression | name | yes | — | Facial expression row name |

Usage
==

```js
await inzoi.cli.execute('facial.set', {
  entity_id: 0, // optional
  expression: '',
});
```