# building.set_option

Overview
==

- [Build Mode Only] Sets one or more build mode options at once. All parameters are optional; only specified options are changed.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Build Options |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | `SetBuildOption` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| free_location | bool | no | — | Allow free object placement without snapping |
| grid_snap | bool | no | — | Snap objects to grid |
| object_snap | bool | no | — | Snap objects to other objects |
| uniform_scaling | bool | no | — | Scale all axes uniformly |
| smart_guide | bool | no | — | Show smart alignment guides |
| delete_mode | bool | no | — | Enable delete mode |
| continuous_placement | bool | no | — | Place objects continuously |

Usage
==

```js
await inzoi.cli.execute('building.set_option', {
  free_location: false, // optional
  grid_snap: false, // optional
  object_snap: false, // optional
  uniform_scaling: false, // optional
  smart_guide: false, // optional
  delete_mode: false, // optional
  continuous_placement: false, // optional
});
```