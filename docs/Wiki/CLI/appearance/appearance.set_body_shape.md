# appearance.set_body_shape

Overview
==

- Adjust body shape by named group (e.g. Belly, Arm) or raw parameter index. action=list shows groups, action=get reads values, action=set changes them. Value range: -1.0 to 1.0.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Body Shape |
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
| action | string | no | list | list (default), get, or set |
| group | string | no | — | Gizmo group name (e.g. Belly, Arm). Use action=list to see all. |
| index | int | no | — | Raw parameter index (alternative to group) |
| value | float | no | — | Shape value: -1.0 to 1.0 |

Usage
==

```js
await inzoi.cli.execute('appearance.set_body_shape', {
  entity_id: 0, // optional
  action: 'list', // optional
  group: '', // optional
  index: 0, // optional
  value: 0.0, // optional
});
```