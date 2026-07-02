# gameplay.list_languages

Overview
==

- Returns all supported languages from the L10N data table (row id, Unreal culture name, Steam culture name) plus the current language.

Metadata
==

| Field | Value |
|---|---|
| Display | List Languages |
| Category | `gameplay` |
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
await inzoi.cli.execute('gameplay.list_languages');
```