# smartbuild.set_floor_texture

Overview
==

- Apply a user-provided PNG/JPG image as a floor (or ceiling) material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. Specify floor_level and/or room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling. A Floor snapshot (before/after) is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Floor/Ceiling Texture (Imported Image) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| file_path | string | no | — | Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened. |
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| room_index | int | no | — | Room index within floor (from build.scan_floors). Omit for all rooms. |
| target | string | no | floor | floor (default) or ceiling |
| site_id | string | no | — | Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.set_floor_texture', {
  file_path: '', // optional
  floor_level: 0, // optional
  room_index: 0, // optional
  target: 'floor', // optional
  site_id: '', // optional
});
```