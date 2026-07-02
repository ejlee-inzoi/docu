# smartbuild.preview_commit

Overview
==

- Keep the current drag preview as a real change (site is auto-saved). Discards the snapshot. In build mode a before/after snapshot (floor-based for walls/floors, per-part FB1MaterialParams for objects) is pushed onto the Build Undo stack. In play mode the same pair is pushed onto the play-mode mini-undo stack. Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the original look in both modes as long as keyboard focus is not on a text editor.

Metadata
==

| Field | Value |
|---|---|
| Display | Commit Drag Preview |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('smartbuild.preview_commit');
```