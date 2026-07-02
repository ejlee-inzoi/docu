# build.set_color

Overview
==

- Change the color of a game object. Supports hex (#FF0000) or named colors (red, blue, green, white, black, yellow, cyan, magenta, orange, pink, brown, gray). If part_index is omitted, applies to all parts.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Color |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID |
| color | string | yes | — | Color value: hex (#0000FF) or name (blue) |
| part_index | int | no | — | Part index to apply to (default: all parts) |

Usage
==

```js
await inzoi.cli.execute('build.set_color', {
  entity_id: 0,
  color: '',
  part_index: 0, // optional
});
```