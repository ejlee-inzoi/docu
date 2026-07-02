# appearance.set_garment_color

Overview
==

- Change a garment's custom color (same path as Character Studio's color picker). garment_type: top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf. color: #RRGGBB / #RRGGBBAA or a named color (red, blue, white, ...). parts_button_index selects between multiple color zones on the same garment (default: 0).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Garment Color |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| garment_type | string | yes | — | Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf) |
| color | string | yes | — | Color string: #RRGGBB / #RRGGBBAA or named (red, blue, white, ...) |
| parts_button_index | int | no | — | Color zone index on the garment (default: 0; try 0/1/2 if the first zone does nothing) |
| skip_commit | bool | no | — | Debug: skip server commit to isolate local-vs-network issues (default: false) |

Usage
==

```js
await inzoi.cli.execute('appearance.set_garment_color', {
  entity_id: 0, // optional
  garment_type: '',
  color: '',
  parts_button_index: 0, // optional
  skip_commit: false, // optional
});
```