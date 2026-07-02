# cleaning.unlock_door

Overview
==

- Toggles cheat access to open locked doors.

Metadata
==

| Field | Value |
|---|---|
| Display | Unlock Door |
| Category | `cleaning` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `UnlockDoor`, `household.unlock_door` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable door unlock cheat |

Usage
==

```js
await inzoi.cli.execute('cleaning.unlock_door', {
  enable: false,
});
```