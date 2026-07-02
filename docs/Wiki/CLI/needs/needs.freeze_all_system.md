# needs.freeze_all_system

Overview
==

- Freezes or unfreezes the needs system globally.

Metadata
==

| Field | Value |
|---|---|
| Display | Freeze All Needs System |
| Category | `needs` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `FreezeAllNeedsSystem` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | True to freeze the needs system |

Usage
==

```js
await inzoi.cli.execute('needs.freeze_all_system', {
  enable: false,
});
```