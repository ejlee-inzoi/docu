# social_event.cancel_role_check

Overview
==

- Forces re-evaluation of role conditions for all members of a social event, removing or canceling members that fail.

Metadata
==

| Field | Value |
|---|---|
| Display | Cancel/Remove If Role Condition Fails |
| Category | `social_event` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `CancelOrRemoveIfRoleConditionFails` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| social_event_id | int | yes | — | Runtime SiteEvent id (int64) |

Usage
==

```js
await inzoi.cli.execute('social_event.cancel_role_check', {
  social_event_id: 0,
});
```