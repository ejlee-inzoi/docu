# smartbuild.set_object_texture

Overview
==

- Apply a user-provided PNG/JPG image as a game object's material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. The image is registered in the user's MyTexture gallery and then applied to the target part(s). A per-part FB1MaterialParams before/after snapshot is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look. Use build.get_customize_info to see parts.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Object Texture (Imported Image) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID |
| file_path | string | no | — | Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened. |
| part_index | int | no | — | Target part index (default: all parts) |

Usage
==

```js
await inzoi.cli.execute('smartbuild.set_object_texture', {
  entity_id: 0,
  file_path: '', // optional
  part_index: 0, // optional
});
```