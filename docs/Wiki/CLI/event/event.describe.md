# event.describe

Overview
==

- Returns the payload schema of a specific game event

Metadata
==

| Field | Value |
|---|---|
| Display | Describe Game Event |
| Category | `event` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | yes | — | Event name to describe |

Usage
==

```js
await inzoi.cli.execute('event.describe', {
  name: '',
});
```