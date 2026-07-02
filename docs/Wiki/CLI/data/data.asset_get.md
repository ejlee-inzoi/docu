# data.asset_get

Overview
==

- Returns a DataAsset's full content as JSON. alias: asset alias (e.g. GameConfig).

Metadata
==

| Field | Value |
|---|---|
| Display | Query DataAsset |
| Category | `data` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| alias | string | yes | — | DataAsset alias (e.g. 'GameConfig') |

Usage
==

```js
await inzoi.cli.execute('data.asset_get', {
  alias: '',
});
```