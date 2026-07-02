# build.set_material

Overview
==

- Set individual material parameters on a game object part. Specify only the parameters you want to change. Use build.get_customize_info to see available parts.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Material |
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
| part_index | int | no | 0 | Part index (default: 0) |
| color | string | no | — | Base color (hex or name) |
| roughness | float | no | — | Roughness (0~1) |
| metallic | float | no | — | Metallic (0~1) |
| specular | float | no | — | Specular (0~1) |
| opacity | float | no | — | Opacity (0~1) |
| pattern_color | string | no | — | Pattern color (hex or name) |
| pattern_scale | float | no | — | Pattern scale |
| emissive_color | string | no | — | Emissive color (hex or name) |
| emissive_multi | float | no | — | Emissive multiplier |
| material_group | int | no | — | Material group preset index |
| material_index | int | no | — | Material index within group |

Usage
==

```js
await inzoi.cli.execute('build.set_material', {
  entity_id: 0,
  part_index: 0, // optional
  color: '', // optional
  roughness: 0.0, // optional
  metallic: 0.0, // optional
  specular: 0.0, // optional
  opacity: 0.0, // optional
  pattern_color: '', // optional
  pattern_scale: 0.0, // optional
  emissive_color: '', // optional
  emissive_multi: 0.0, // optional
  material_group: 0, // optional
  material_index: 0, // optional
});
```