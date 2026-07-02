# build.remove_object

Overview
==

- Remove a placed game object from the current site. In build mode the removal goes through the undo/redo command stack with automatic price refund. In play mode the object is destroyed directly and the object's price is refunded to the household wallet. Use build.scan_objects to discover entity IDs.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Placed Object |
| Category | `build` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID (from build.scan_objects) |

Usage
==

```js
await inzoi.cli.execute('build.remove_object', {
  entity_id: 0,
});
```