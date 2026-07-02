# build.get_customize_info

Overview
==

- Returns customizable parts and current material parameters of a game object (furniture, decoration, etc).

Metadata
==

| Field | Value |
|---|---|
| Display | Get Customize Info |
| Category | `build` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target game object entity ID |

Usage
==

```js
await inzoi.cli.execute('build.get_customize_info', {
  entity_id: 0,
});
```