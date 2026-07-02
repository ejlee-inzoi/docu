# stat.set_all

Overview
==

- Sets all major stats to min or max on the target character. mode='min'|'max' (default: max).

Metadata
==

| Field | Value |
|---|---|
| Display | Set All Stats |
| Category | `stat` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| mode | string | yes | — | 'min' or 'max' |

Usage
==

```js
await inzoi.cli.execute('stat.set_all', {
  entity_id: 0, // optional
  mode: '',
});
```