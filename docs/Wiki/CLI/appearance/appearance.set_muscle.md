# appearance.set_muscle

Overview
==

- Get or set muscle mass. 0.0 = no muscle, 1.0 = max muscle. Use action=get to read current value.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Muscle |
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
| action | string | no | get | get (default) or set |
| value | float | no | — | Muscle mass: 0.0 (none) to 1.0 (max) |

Usage
==

```js
await inzoi.cli.execute('appearance.set_muscle', {
  entity_id: 0, // optional
  action: 'get', // optional
  value: 0.0, // optional
});
```