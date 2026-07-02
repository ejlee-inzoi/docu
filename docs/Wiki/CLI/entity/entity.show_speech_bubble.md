# entity.show_speech_bubble

Overview
==

- Shows a speech bubble with custom text directly above a character's head.

Metadata
==

| Field | Value |
|---|---|
| Display | Show Speech Bubble |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| text | string | yes | — | Text to display in the speech bubble |
| entity_id | entityId | no | — | Target character (default: possessed) |
| duration | float | no | — | Display duration in seconds (default: 10) |

Usage
==

```js
await inzoi.cli.execute('entity.show_speech_bubble', {
  text: '',
  entity_id: 0, // optional
  duration: 0.0, // optional
});
```