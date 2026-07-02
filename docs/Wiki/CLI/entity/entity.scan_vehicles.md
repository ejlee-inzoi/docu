# entity.scan_vehicles

Overview
==

- Scans nearby vehicles relative to camera/pawn direction.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Vehicles |
| Category | `entity` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| radius | float | no | — | Search radius in meters (default 100, max 1000) |
| direction | string | no | — | Direction filter: front/behind/left/right/all (default all) |
| cone | float | no | — | Cone half-angle in degrees (default 90) |
| sort | string | no | — | Sort by: distance/angle (default distance) |
| ref | string | no | — | Reference direction: camera/pawn (default camera) |
| limit | int | no | — | Max results (default 20, max 100) |

Usage
==

```js
await inzoi.cli.execute('entity.scan_vehicles', {
  radius: 0.0, // optional
  direction: '', // optional
  cone: 0.0, // optional
  sort: '', // optional
  ref: '', // optional
  limit: 0, // optional
});
```