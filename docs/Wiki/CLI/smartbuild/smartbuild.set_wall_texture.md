# smartbuild.set_wall_texture

Overview
==

- Apply a user-provided PNG/JPG image as a wall material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. Use floor_level to filter. side: front, back, or both (default). A Floor snapshot (before/after) is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Wall Texture (Imported Image) |
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
| edge_key | int | no | — | Specific wall edge key (from build.scan_walls). Omit for all walls. |
| floor_level | int | no | — | Filter by floor level (default: all floors) |
| side | string | no | both | Which side: front, back, or both (default: both) |
| site_id | string | no | — | Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.set_wall_texture', {
  file_path: '', // optional
  edge_key: 0, // optional
  floor_level: 0, // optional
  side: 'both', // optional
  site_id: '', // optional
});
```