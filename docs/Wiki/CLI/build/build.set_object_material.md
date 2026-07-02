# build.set_object_material

Overview
==

- Change a game object's material preset (texture set). If material_group/material_index are omitted, a random valid preset is chosen per part. Omit part_index to apply to every part. color is optional and applied on top. Use build.get_customize_info to see available parts.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Material |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID |
| material_group | int | no | — | Material group index (default: random) |
| material_index | int | no | — | Material index within group (default: random) |
| color | string | no | — | Optional tint color (hex or name) |
| part_index | int | no | — | Target part index (default: all parts) |

Usage
==

```js
await inzoi.cli.execute('build.set_object_material', {
  entity_id: 0,
  material_group: 0, // optional
  material_index: 0, // optional
  color: '', // optional
  part_index: 0, // optional
});
```