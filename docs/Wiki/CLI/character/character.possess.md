# character.possess

Overview
==

- Switches play to the specified character. Same household -> avatar swap; different household -> household switch. Handles camera, spawn, and UI transition.

Metadata
==

| Field | Value |
|---|---|
| Display | Possess Character |
| Category | `character` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| character_id | entityId | yes | — | Character entity ID to possess |
| household_id | entityId | no | — | Household entity ID the character belongs to (optional, enables cross-household switch) |

Usage
==

```js
await inzoi.cli.execute('character.possess', {
  character_id: 0,
  household_id: 0, // optional
});
```