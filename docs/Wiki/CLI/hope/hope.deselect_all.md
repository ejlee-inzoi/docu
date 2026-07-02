# hope.deselect_all

Overview
==

- Deselects all hopes on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Deselect All Hopes |
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

Usage
==

```js
await inzoi.cli.execute('hope.deselect_all', {
  entity_id: 0, // optional
});
```