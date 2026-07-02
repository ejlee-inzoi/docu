# hope.complete

Overview
==

- Instantly completes a currently-selected hope on the target character, running its completion reward script and firing the completion popup. The hope must be selected (see hope.list).

Metadata
==

| Field | Value |
|---|---|
| Display | Complete Hope |
| Category | `hope` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| hope_id | name | yes | — | Hope ID to complete (must be currently selected) |

Usage
==

```js
await inzoi.cli.execute('hope.complete', {
  entity_id: 0, // optional
  hope_id: '',
});
```