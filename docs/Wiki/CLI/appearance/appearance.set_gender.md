# appearance.set_gender

Overview
==

- Transforms the character's visual appearance to the target gender.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Gender |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B1Multicast` |
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
await inzoi.cli.execute('appearance.set_gender', {
  entity_id: 0, // optional
  gender: '',
});
```