# appearance.hair

Overview
==

- Manage hairstyle. action=get (default): show current hair info. change: switch to random different hairstyle. Hair always exists, so add/remove are not supported.

Metadata
==

| Field | Value |
|---|---|
| Display | Hair |
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
| action | string | no | get | get (default), change |
| id | name | no | — | Specific hair mesh ID to equip (for change). Omit for random. |

Usage
==

```js
await inzoi.cli.execute('appearance.hair', {
  entity_id: 0, // optional
  action: 'get', // optional
  id: '', // optional
});
```