# appearance.hat

Overview
==

- Manage hat. action=get (default): show current hat info. add: equip random hat. change: switch to different random hat. remove: take off.

Metadata
==

| Field | Value |
|---|---|
| Display | Hat |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| action | string | no | get | get (default), add, change, remove |
| id | name | no | — | Specific mesh ID to equip (for add/change). Omit for random. |

Usage
==

```js
await inzoi.cli.execute('appearance.hat', {
  entity_id: 0, // optional
  action: 'get', // optional
  id: '', // optional
});
```