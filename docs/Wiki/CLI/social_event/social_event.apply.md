# social_event.apply

Overview
==

- Cheat-creates a social event (SiteEvent) at the possessed character's site using the given template id. Mirrors UB2CheatManager::B2ApplySocialEvent.

Metadata
==

| Field | Value |
|---|---|
| Display | Apply Social Event |
| Category | `social_event` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ApplySocialEvent` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| social_event_id | name | yes | — | SiteEvent TableRow id (e.g. SocialEvent_BirthdayParty) |
| group_type | name | no | — | Candidate scope. Empty uses relationships; all/all_characters/all_citizens uses every loaded character. |
| site_id | name | no | — | Optional event site id. Empty uses the possessed character's current site. |

Usage
==

```js
await inzoi.cli.execute('social_event.apply', {
  social_event_id: '',
  group_type: '', // optional
  site_id: '', // optional
});
```