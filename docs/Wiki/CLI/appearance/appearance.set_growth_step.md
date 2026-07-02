# appearance.set_growth_step

Overview
==

- Changes the character's growth step by setting their age to the start of that step.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Growth Step |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| growth_step | string | yes | — | Growth step name: Infant, Toddler, Child, LowTeen, HighTeen, Youth, Adult, Old, Elderly |

Usage
==

```js
await inzoi.cli.execute('appearance.set_growth_step', {
  entity_id: 0, // optional
  growth_step: '',
});
```