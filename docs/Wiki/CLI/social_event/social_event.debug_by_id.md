# social_event.debug_by_id

Overview
==

- Prints on-screen debug summary/roles of a social event by its runtime SiteEvent id.

Metadata
==

| Field | Value |
|---|---|
| Display | Debug Social Event (By Id) |
| Category | `social_event` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `DebugSocialEventById` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| social_event_id | int | yes | — | Runtime SiteEvent id (int64) |

Usage
==

```js
await inzoi.cli.execute('social_event.debug_by_id', {
  social_event_id: 0,
});
```