# curseforge.verify_code

Overview
==

- Verify the 6-digit security code received by email and obtain an auth token. Async; the result is reported via toast. cfcore persists the token internally on success.

Metadata
==

| Field | Value |
|---|---|
| Display | CurseForge Verify Code |
| Category | `curseforge` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | yes | — | CurseForge account email previously used with curseforge.send_code. |
| code | int | yes | — | 6-digit security code received by email. |

Usage
==

```js
await inzoi.cli.execute('curseforge.verify_code', {
  email: '',
  code: 0,
});
```