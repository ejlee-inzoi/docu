# entity.attach_prop

Overview
==

- Spawn an object or vehicle and attach it to a character bone. action=list_sockets [filter=<kw>]: list mesh sockets. action=attach object_id=<DT_ID> [type=object|vehicle] [bone=<Name>]: spawn and attach (default bone: pelvis).   type=object (default): uses Object data table. type=vehicle: uses Vehicle data table. action=list: show attached props with index, type, and transform. action=set_transform prop_index=<N> [x y z] [rx ry rz] [sx sy sz]: adjust relative transform. action=detach [prop_index=<N>]: remove one or all props. Collision and physics are disabled on the prop automatically.

Metadata
==

| Field | Value |
|---|---|
| Display | Attach Prop to Character Bone |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `EntityAttachProp` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target character (default: possessed) |
| action | string | no | list | list (default), list_sockets, attach, set_transform, detach |
| object_id | name | no | — | Data table row ID to spawn (required for attach) |
| type | string | no | object | Prop source table: object (default) or vehicle |
| bone | string | no | — | Bone or socket name (default: pelvis) |
| filter | string | no | — | Socket name filter for list_sockets |
| prop_index | int | no | — | Index of attached prop (for set_transform/detach) |
| x | float | no | — | Relative X offset (cm) |
| y | float | no | — | Relative Y offset (cm) |
| z | float | no | — | Relative Z offset (cm) |
| rx | float | no | — | Relative Pitch (degrees) |
| ry | float | no | — | Relative Yaw (degrees) |
| rz | float | no | — | Relative Roll (degrees) |
| sx | float | no | — | Relative scale X (also sets Y/Z if sy/sz omitted) |
| sy | float | no | — | Relative scale Y |
| sz | float | no | — | Relative scale Z |

Usage
==

```js
await inzoi.cli.execute('entity.attach_prop', {
  entity_id: 0, // optional
  action: 'list', // optional
  object_id: '', // optional
  type: 'object', // optional
  bone: '', // optional
  filter: '', // optional
  prop_index: 0, // optional
  x: 0.0, // optional
  y: 0.0, // optional
  z: 0.0, // optional
  rx: 0.0, // optional
  ry: 0.0, // optional
  rz: 0.0, // optional
  sx: 0.0, // optional
  sy: 0.0, // optional
  sz: 0.0, // optional
});
```