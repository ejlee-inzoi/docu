# curseforge.logout

Overview
==

- Log out from CurseForge by invalidating the current cfcore auth token. Mainly used to reset state before running login-flow tests. Async; result via toast.

Metadata
==

| Field | Value |
|---|---|
| Display | CurseForge Logout |
| Category | `curseforge` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('curseforge.logout');
```