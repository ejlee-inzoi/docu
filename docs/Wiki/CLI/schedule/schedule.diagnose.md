# schedule.diagnose

Overview
==

- Diagnose the current schedule: where it is heading (dest target / room purpose / goto site / arrived bag, arrival markers) and where it was registered (timeline / schedule type / career type / site event).

Metadata
==

| Field | Value |
|---|---|
| Display | Diagnose Schedule Routing |
| Category | `schedule` |
| Access | `Public` |
| Scope | `B2Authority` |
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
await inzoi.cli.execute('schedule.diagnose', {
  entity_id: 0, // optional
});
```