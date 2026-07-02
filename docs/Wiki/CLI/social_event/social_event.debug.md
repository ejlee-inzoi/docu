# social_event.debug

Overview
==

- Prints on-screen debug summary/roles of the social event the given entity participates in. Defaults to possessed character.

Metadata
==

| Field | Value |
|---|---|
| Display | Debug Social Event (Entity) |
| Category | `social_event` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `DebugSocialEvent` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | 0 | Target entity id (0 or omitted = possessed) |

Usage
==

```js
await inzoi.cli.execute('social_event.debug', {
  entity_id: 0, // optional
});
```