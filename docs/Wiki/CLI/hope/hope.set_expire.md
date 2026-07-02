# hope.set_expire

Overview
==

- Cheat/test: directly overrides a currently-selected hope's remaining lifetime in in-game seconds, bypassing the hope's table LifeTimeSecond and the GLOBAL deselect_cooltime config (which only apply at selection time). Also unfixes the hope so it can expire. The hope must be selected (see hope.list).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Hope Expire |
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
| hope_id | name | yes | — | Hope ID to modify (must be currently selected) |
| remain_seconds | int | yes | — | New remaining lifetime in in-game seconds (> 0) |

Usage
==

```js
await inzoi.cli.execute('hope.set_expire', {
  entity_id: 0, // optional
  hope_id: '',
  remain_seconds: 0,
});
```