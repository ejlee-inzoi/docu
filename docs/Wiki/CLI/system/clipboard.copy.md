# clipboard.copy

Overview
==

- Copies the given text to the system clipboard.

Metadata
==

| Field | Value |
|---|---|
| Display | Copy to Clipboard |
| Category | `system` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| text | string | yes | — | Text to copy |

Usage
==

```js
await inzoi.cli.execute('clipboard.copy', {
  text: '',
});
```