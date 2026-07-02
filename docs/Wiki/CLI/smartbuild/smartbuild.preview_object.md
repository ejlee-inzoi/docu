# smartbuild.preview_object

Overview
==

- Temporarily apply an image to a game object's material for drag-over preview. The object's per-part FB1MaterialParams is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change or smartbuild.preview_clear to cancel. Supports path_key (reuse an already imported image) or file_path (import first). If part_index is omitted, the image is applied to every part.

Metadata
==

| Field | Value |
|---|---|
| Display | Preview Object Texture (Drag) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID (from smartbuild.pick_surface_at_screen or build.scan_objects) |
| part_index | int | no | — | Target part index (default: apply to every part) |
| path_key | string | no | — | Existing MyTexture path key to reuse (skip import) |
| file_path | string | no | — | Image file path. Used when path_key is omitted. |
| pattern_scale | float | no | — | Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale. |
| pattern_offset_x | float | no | — | Optional pattern UV offset X. 0=default. Used by drag-and-drop pan. |
| pattern_offset_y | float | no | — | Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.preview_object', {
  entity_id: 0,
  part_index: 0, // optional
  path_key: '', // optional
  file_path: '', // optional
  pattern_scale: 0.0, // optional
  pattern_offset_x: 0.0, // optional
  pattern_offset_y: 0.0, // optional
});
```