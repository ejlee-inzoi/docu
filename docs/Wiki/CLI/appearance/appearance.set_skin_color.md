# appearance.set_skin_color

Overview
==

- Get, list, or set skin color. action=get: show current. action=list: show available color IDs. action=set: apply color_id.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Skin Color |
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
| action | string | no | get | get (default), list, set |
| color_id | name | no | — | Skin color preset ID (use action=list to see options) |

Usage
==

```js
await inzoi.cli.execute('appearance.set_skin_color', {
  entity_id: 0, // optional
  action: 'get', // optional
  color_id: '', // optional
});
```