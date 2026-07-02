# sound.get_volumes

Overview
==

- Returns all sound volume levels (master, music, sfx, ui, voice, cinematic, background_audio) as JSON.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Sound Volumes |
| Category | `sound` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('sound.get_volumes');
```