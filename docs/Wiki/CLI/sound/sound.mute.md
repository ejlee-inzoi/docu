# sound.mute

Overview
==

- Mute or unmute all sound by setting master volume to 0 or 100. Default: mute. Use enable=false to unmute.

Metadata
==

| Field | Value |
|---|---|
| Display | Mute Sound |
| Category | `sound` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | no | true | true=mute (default), false=unmute |

Usage
==

```js
await inzoi.cli.execute('sound.mute', {
  enable: true, // optional
});
```