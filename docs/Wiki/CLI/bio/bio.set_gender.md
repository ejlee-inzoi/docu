# bio.set_gender

Overview
==

- Updates the simulation-side gender in FB2BioComponent.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Bio Gender |
| Category | `bio` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| gender | string | yes | — | Gender: Male or Female |

Usage
==

```js
await inzoi.cli.execute('bio.set_gender', {
  entity_id: 0, // optional
  gender: '',
});
```