# hope.force_update

Overview
==

- Forces a hope refresh/re-evaluation on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Force Update Hopes |
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
await inzoi.cli.execute('hope.force_update', {
  entity_id: 0, // optional
});
```