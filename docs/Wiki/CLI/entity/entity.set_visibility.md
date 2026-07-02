# entity.set_visibility

Overview
==

- Show or hide a character. Default mode toggles mesh visibility only (input/movement/collision remain functional). action=status (default): show actor/mesh visibility and all hide reasons. action=hide / show / toggle: change visibility. mode=mesh (default) toggles only the visual SkeletalMeshComponents. mode=actor uses UB1VisibilityManager to hide the entire actor (may break input/movement; use only for debug). reason=<Name> overrides the default CLI reason in actor mode.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Character Visibility |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `EntitySetVisibility` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target character (default: possessed) |
| action | string | no | status | status (default), show, hide, toggle |
| mode | string | no | mesh | mesh (default) or actor |
| reason | string | no | — | Hide reason for actor mode (default: CLI_Visibility) |

Usage
==

```js
await inzoi.cli.execute('entity.set_visibility', {
  entity_id: 0, // optional
  action: 'status', // optional
  mode: 'mesh', // optional
  reason: '', // optional
});
```