# smartbuild.shape

Overview
==

- Spawn primitive shapes (cube/sphere/cylinder/cone/plane) at world coordinates and control their transform/color/lifetime via a handle. Uses /Engine/BasicShapes meshes and a per-instance MID on BasicShapeMaterial. Spawned shapes are no-collision, no-physics — pure debug markers that do not interfere with character movement. Tracked entries auto-purge when the level changes (WeakObjectPtr-based). action=spawn shape=<id> x=.. y=.. z=.. [rx ry rz] [sx sy sz] [r g b] [label]:   spawn at world coords (cm). Returns handle. sx-only sets uniform scale. action=spawn_at_screen shape=<id> [x y]: spawn at the surface under a screen   pixel via line trace (Visibility channel). x/y default to current mouse position. action=list (default): list all tracked shapes with their world transform. action=set_transform handle=<N> [x y z] [rx ry rz] [sx sy sz]: overwrite only   the specified axes; other axes are kept. action=set_color handle=<N> r=.. g=.. b=..: change the MID Color (0~1 linear). action=destroy handle=<N> | all=1: remove one or every spawned shape.

Metadata
==

| Field | Value |
|---|---|
| Display | Spawn Debug Primitive |
| Category | `smartbuild` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| action | string | no | list | list (default), spawn, spawn_at_screen, set_transform, set_color, destroy |
| shape | string | no | — | cube\|sphere\|cylinder\|cone\|plane |
| handle | int | no | — | Spawned shape handle (for set_transform/set_color/destroy) |
| x | float | no | — | World X (cm) for spawn / Pitch override for set_transform / screen X pixel for spawn_at_screen |
| y | float | no | — | World Y (cm) for spawn / screen Y pixel for spawn_at_screen |
| z | float | no | — | World Z (cm) |
| rx | float | no | — | Pitch (degrees) |
| ry | float | no | — | Yaw (degrees) |
| rz | float | no | — | Roll (degrees) |
| sx | float | no | — | Scale X (uniform when sy/sz omitted) |
| sy | float | no | — | Scale Y |
| sz | float | no | — | Scale Z |
| r | float | no | — | Color R (0~1 linear) |
| g | float | no | — | Color G (0~1 linear) |
| b | float | no | — | Color B (0~1 linear) |
| label | string | no | — | Optional user label echoed back in list output |
| all | bool | no | — | destroy: remove every tracked shape |

Usage
==

```js
await inzoi.cli.execute('smartbuild.shape', {
  action: 'list', // optional
  shape: '', // optional
  handle: 0, // optional
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  rx: 0.0, // optional
  ry: 0.0, // optional
  rz: 0.0, // optional
  sx: 0.0, // optional
  sy: 0.0, // optional
  sz: 0.0, // optional
  r: 0.0, // optional
  g: 0.0, // optional
  b: 0.0, // optional
  label: '', // optional
  all: false, // optional
});
```