# appearance.set_body_mass

Overview
==

- Get or set body mass ratio. -1.0 = very thin, 0.0 = standard, 1.0 = very fat. Use action=get to read current value.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Body Mass |
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
| value | float | no | — | Body mass ratio: -1.0 (thin) to 1.0 (fat) |

Usage
==

```js
await inzoi.cli.execute('appearance.set_body_mass', {
  entity_id: 0, // optional
  action: 'get', // optional
  value: 0.0, // optional
});
```