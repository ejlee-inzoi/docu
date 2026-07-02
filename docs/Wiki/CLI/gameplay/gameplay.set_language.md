# gameplay.set_language

Overview
==

- Change the game display language. Accepts Unreal culture names (ko-KR, en-US, zh-CN, zh-TW, ja-JP, ru-RU, es-ES, pt-BR, pt-PT, de-DE, fr-FR, it-IT, pl-PL), Steam names (koreana, schinese, ...), or short codes (ko, en, ja). Call gameplay.list_languages to see the exact set.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Language |
| Category | `gameplay` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | string | yes | — | Language identifier (row id, culture name, steam name, or 2-letter prefix) |

Usage
==

```js
await inzoi.cli.execute('gameplay.set_language', {
  value: '',
});
```