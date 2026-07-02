# smartbuild.preview_floor

Overview
==

- Temporarily apply an image to a floor or ceiling for drag-over preview. The floor is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change or smartbuild.preview_clear to cancel. Supports path_key (reuse an already imported image) or file_path (import first).

Metadata
==

| Field | Value |
|---|---|
| Display | Preview Floor/Ceiling Texture (Drag) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| floor_level | int | yes | — | Floor level that owns the target room (ceiling target: use the lower floor that contains the room) |
| room_index | int | yes | — | Room index on the floor (from build.scan_floors or smartbuild.pick_surface_at_screen) |
| is_ceil | bool | no | false | true to apply to the ceiling instead of the floor (default false) |
| path_key | string | no | — | Existing MyTexture path key to reuse (skip import) |
| file_path | string | no | — | Image file path. Used when path_key is omitted. |
| pattern_scale | float | no | — | Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale. |
| pattern_offset_x | float | no | — | Optional pattern UV offset X. 0=default. Used by drag-and-drop pan. |
| pattern_offset_y | float | no | — | Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| site_id | string | no | — | Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.preview_floor', {
  floor_level: 0,
  room_index: 0,
  is_ceil: false, // optional
  path_key: '', // optional
  file_path: '', // optional
  pattern_scale: 0.0, // optional
  pattern_offset_x: 0.0, // optional
  pattern_offset_y: 0.0, // optional
  site_id: '', // optional
});
```