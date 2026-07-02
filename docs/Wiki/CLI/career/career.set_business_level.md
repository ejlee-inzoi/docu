# career.set_business_level

Overview
==

- Sets the business level for the household biz.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Business Level |
| Category | `career` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetBusinessLevel`, `job.set_business_level` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| level | int | yes | — | Business level |

Usage
==

```js
await inzoi.cli.execute('career.set_business_level', {
  entity_id: 0, // optional
  level: 0,
});
```