# hope.set_fix

Overview
==

- Pins or unpins a hope on the target character. fixed=true to pin, false to unpin.

Metadata
==

| Field | Value |
|---|---|
| Display | Fix/Unfix Hope |
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
| fixed | bool | yes | — | true to fix, false to unfix |

Usage
==

```js
await inzoi.cli.execute('hope.set_fix', {
  entity_id: 0, // optional
  hope_id: '',
  fixed: false,
});
```