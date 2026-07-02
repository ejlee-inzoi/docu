# smartbuild.preview_wall

Overview
==

- Temporarily apply an image to a wall for drag-over preview. The floor is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change or smartbuild.preview_clear to cancel. Supports path_key (reuse an already imported image) or file_path (import first).

Metadata
==

| Field | Value |
|---|---|
| Display | Preview Wall Texture (Drag) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| edge_key | int | yes | — | Target wall edge key (from build.scan_walls or smartbuild.pick_surface_at_screen) |
| floor_level | int | yes | — | Floor level of the target wall |
| side | string | no | both | Which side: front, back, or both (default) |
| path_key | string | no | — | Existing MyTexture path key to reuse (skip import) |
| file_path | string | no | — | Image file path. Used when path_key is omitted. |
| pattern_scale | float | no | — | Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale. |
| pattern_offset_x | float | no | — | Optional pattern UV offset X. 0=default. Used by drag-and-drop pan. |
| pattern_offset_y | float | no | — | Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| site_id | string | no | — | Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.preview_wall', {
  edge_key: 0,
  floor_level: 0,
  side: 'both', // optional
  path_key: '', // optional
  file_path: '', // optional
  pattern_scale: 0.0, // optional
  pattern_offset_x: 0.0, // optional
  pattern_offset_y: 0.0, // optional
  site_id: '', // optional
});
```