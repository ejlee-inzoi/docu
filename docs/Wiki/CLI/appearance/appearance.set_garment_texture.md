# appearance.set_garment_texture

Overview
==

- Apply a user-provided PNG/JPG image as a garment's AI texture (same pipeline as Character Studio > MyTexture on clothing). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. garment_type: top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf. channel: AI texture slot (0, 1, or 2; default 0). intensity: application strength in [0.0, 1.0] (default 1.0).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Garment Texture (Imported Image) |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| garment_type | string | yes | — | Garment slot (top, bottom, full, shoes, jacket, hat, socks, stockings, gloves, scarf) |
| file_path | string | no | — | Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened. |
| path_key | string | no | — | Pre-imported MyTexture path_key. If provided, skips file import entirely (drag-and-drop uses this to avoid re-importing the same file on every hover/drop). |
| channel | int | no | — | AI texture channel (0=R default, 1=G, 2=B) |
| intensity | float | no | 1.0 | AI texture intensity in [0.0, 1.0] (default 1.0) |

Usage
==

```js
await inzoi.cli.execute('appearance.set_garment_texture', {
  entity_id: 0, // optional
  garment_type: '',
  file_path: '', // optional
  path_key: '', // optional
  channel: 0, // optional
  intensity: 1.0, // optional
});
```