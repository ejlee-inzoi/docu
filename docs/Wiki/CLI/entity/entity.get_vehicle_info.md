# entity.get_vehicle_info

Overview
==

- Returns detailed info for a vehicle: type, data table ID, color, driver, display name, template, asset, and price.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Vehicle Info |
| Category | `entity` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Entity ID of the vehicle |

Usage
==

```js
await inzoi.cli.execute('entity.get_vehicle_info', {
  entity_id: 0,
});
```