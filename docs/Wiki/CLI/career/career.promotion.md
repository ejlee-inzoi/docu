# career.promotion

Overview
==

- Promotes the current Zoi in their job.

Metadata
==

| Field | Value |
|---|---|
| Display | Job Promotion |
| Category | `career` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `JobPromotion`, `job.promotion` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('career.promotion', {
  entity_id: 0, // optional
});
```