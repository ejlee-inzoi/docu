# stat.freeze

Overview
==

- Freezes (enabled=true) or unfreezes stat tick for the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Freeze Stats |
| Category | `stat` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| enabled | bool | yes | — | true to freeze, false to unfreeze |

Usage
==

```js
await inzoi.cli.execute('stat.freeze', {
  entity_id: 0, // optional
  enabled: false,
});
```