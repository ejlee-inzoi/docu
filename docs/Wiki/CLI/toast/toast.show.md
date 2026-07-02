# toast.show

Overview
==

- Display a transient system-message toast on the local client. Purely presentational: no save, no broadcast, no gameplay effect. Default lifetime is 5 seconds; pass --immediate=true to bypass the queue and display right away.

Metadata
==

| Field | Value |
|---|---|
| Display | Show Toast Message |
| Category | `toast` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| message | string | yes | — | Message text shown in the toast. Any plain string. |
| lifetime | float | no | 5.0 | Seconds the toast stays visible. Default: 5.0. |
| immediate | bool | no | false | If true, skip the queue and show immediately. Default: false. |

Usage
==

```js
await inzoi.cli.execute('toast.show', {
  message: '',
  lifetime: 5.0, // optional
  immediate: false, // optional
});
```