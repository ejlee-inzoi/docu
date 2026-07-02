# hope.select

Overview
==

- Selects a hope on the target character. Use force=true to override limits.

Metadata
==

| Field | Value |
|---|---|
| Display | Select Hope |
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
| hope_id | name | yes | — | Hope ID |
| force | bool | yes | — | Force add (default: false) |

Usage
==

```js
await inzoi.cli.execute('hope.select', {
  entity_id: 0, // optional
  hope_id: '',
  force: false,
});
```