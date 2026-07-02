# visual.first_person

Overview
==

- Toggles first person camera mode.

Metadata
==

| Field | Value |
|---|---|
| Display | First Person Mode |
| Category | `visual` |
| Access | `UserCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | `FirstPersonMode` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable first person camera |

Usage
==

```js
await inzoi.cli.execute('visual.first_person', {
  enable: false,
});
```