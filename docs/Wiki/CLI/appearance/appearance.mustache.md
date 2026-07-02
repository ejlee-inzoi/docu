# appearance.mustache

Overview
==

- Manage mustache. action=get (default): show current info. add: equip random. change: switch to different. remove: take off.

Metadata
==

| Field | Value |
|---|---|
| Display | Mustache |
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
| id | name | no | — | Specific face hair ID to equip (for add/change). Omit for random. |

Usage
==

```js
await inzoi.cli.execute('appearance.mustache', {
  entity_id: 0, // optional
  action: 'get', // optional
  id: '', // optional
});
```