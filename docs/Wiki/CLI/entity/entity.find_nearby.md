# entity.find_nearby

Overview
==

- [deprecated] Use entity.scan_characters instead.

Metadata
==

| Field | Value |
|---|---|
| Display | Find Nearby (→ scan_characters) |
| Category | `entity` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| radius | float | no | — | Search radius in meters (default 100) |

Usage
==

```js
await inzoi.cli.execute('entity.find_nearby', {
  radius: 0.0, // optional
});
```