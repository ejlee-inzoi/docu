# sound.set_volume

Overview
==

- Set a sound channel volume. Channels: master, music, sfx, ui, voice, cinematic. Value range: 0-100.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Sound Volume |
| Category | `sound` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| channel | string | yes | — | Sound channel: master, music, sfx, ui, voice, cinematic |
| value | string | yes | — | Volume level (0-100) |

Usage
==

```js
await inzoi.cli.execute('sound.set_volume', {
  channel: '',
  value: '',
});
```