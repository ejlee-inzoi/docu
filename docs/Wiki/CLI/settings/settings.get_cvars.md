# settings.get_cvars

Overview
==

- Get current Unreal Engine console variable values as JSON. Filter by comma-separated category prefixes (e.g. --category=r,sg matches r.* and sg.*). Omit --category to return all console variables. IConsoleCommand entries (no value) are excluded.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Console Variables |
| Category | `settings` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| category | string | no | — | Comma-separated category prefixes, e.g. 'r,sg,scalability'. Omit to return all cvars. |

Usage
==

```js
await inzoi.cli.execute('settings.get_cvars', {
  category: '', // optional
});
```