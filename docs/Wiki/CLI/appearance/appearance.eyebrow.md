# appearance.eyebrow

Overview
==

- Manage eyebrow. action=get (default): show current info. add/change: switch to random or specified eyebrow. Eyebrow always exists, so remove is not supported.

Metadata
==

| Field | Value |
|---|---|
| Display | Eyebrow |
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
| action | string | no | get | get (default), add, change |
| id | name | no | — | Specific eyebrow ID to apply (for add/change). Omit for random. |

Usage
==

```js
await inzoi.cli.execute('appearance.eyebrow', {
  entity_id: 0, // optional
  action: 'get', // optional
  id: '', // optional
});
```