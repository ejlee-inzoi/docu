# appearance.scan_garments

Overview
==

- List the character's currently equipped garments (Top, Bottom, Shoes, ...), with which slots have color/AI texture overrides.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Garments |
| Category | `appearance` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('appearance.scan_garments', {
  entity_id: 0, // optional
});
```