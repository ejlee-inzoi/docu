# smartbuild.import_and_place_mesh

Overview
==

- Runtime-import a 3D mesh file (.glb/.gltf) and spawn it at the world location under the given screen pixel. Used by the file drag-and-drop controller for mesh drops. Import is asynchronous: the CLI returns immediately with status="import_started" and the spawn happens after Interchange completes (a few hundred ms typically). On a hit miss (e.g. drop on sky) the actor is not spawned and a log line is emitted. FBX is not supported in this version (no runtime FBX parser); convert to .glb first.

Metadata
==

| Field | Value |
|---|---|
| Display | Import And Place Mesh (Drop) |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| file_path | string | yes | — | Absolute path to a .glb or .gltf file. |
| x | float | yes | — | Screen X pixel (viewport-local) where the user dropped the file. |
| y | float | yes | — | Screen Y pixel (viewport-local) where the user dropped the file. |
| yaw | float | no | 0 | Yaw rotation in degrees applied to the spawned actor (default 0). |

Usage
==

```js
await inzoi.cli.execute('smartbuild.import_and_place_mesh', {
  file_path: '',
  x: 0.0,
  y: 0.0,
  yaw: 0, // optional
});
```