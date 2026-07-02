# career.school_migration_scan

Overview
==

- [BL-47322] Scans loaded world memory for deprecated *_Middle school JobIds in MemberInfo / CareerSlots / GraduationRecords. Hit count should be 0 after save migration runs correctly.

Metadata
==

| Field | Value |
|---|---|
| Display | Scan Middle School Migration |
| Category | `career` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| verbose | bool | no | false | Include detailed findings array in response |

Usage
==

```js
await inzoi.cli.execute('career.school_migration_scan', {
  verbose: false, // optional
});
```