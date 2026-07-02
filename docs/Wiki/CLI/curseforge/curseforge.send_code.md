# curseforge.send_code

Overview
==

- Send a 6-digit passwordless login code to the given email. Async; the result (success or error description) is reported via a system toast.

Metadata
==

| Field | Value |
|---|---|
| Display | CurseForge Send Code |
| Category | `curseforge` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | yes | — | Target CurseForge account email. |

Usage
==

```js
await inzoi.cli.execute('curseforge.send_code', {
  email: '',
});
```