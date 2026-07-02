# data.patch

Overview
==

- Apply an in-place data patch at runtime. Reverted on unmodding.
QUERY SYNTAX (STRICT):
  Every bracket selector MUST be Key=Value. Bare-value selectors like Table[Foo] or arr[0] will FAIL to parse.
    OK:   HouseholdBizConfig[Id=Default].baseEmployeeWagePerHour
    OK:   HouseholdBizConfig[Id=Default].householdBizSkillLevelInfo[level=0].baseEmployeeWagePerHour
    OK:   ItemTable[*].price            (wildcard over all rows)
    BAD:  HouseholdBizConfig[Default].baseEmployeeWagePerHour
    BAD:  householdBizSkillLevelInfo[0].baseEmployeeWagePerHour
COMMON KEYS:
  Top-level row Id is usually 'Id'. Inner arrays use their own key field (e.g. 'level', 'index', 'tier'). If unsure,
  fetch the row first via data.table_get and look at which scalar field uniquely identifies each array element.
METHODS:
  Override = replace the value at the path. Append/Insert = list operations.
POST-PROCESS (OnPostJsonDataLoad):
  Append/Insert (single-row) auto-runs OnPostJsonDataLoad on the new row to populate derived fields
  (e.g. Object.ObjectTags merged from ObjectTemplate). Override/Wildcard does NOT auto-run because
  re-invoking it on already-processed rows can double-apply non-idempotent merges (e.g. Tags.Append).
  Pass refresh=true to force OnPostJsonDataLoad on every applied row regardless of method (use sparingly).

Metadata
==

| Field | Value |
|---|---|
| Display | Patch DataTable |
| Category | `data` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| method | string | yes | — | Override / Append / Insert |
| query | string | yes | — | Patch query path. EVERY bracket MUST be [Key=Value], never [Value] alone. Examples: 'Table[Id=Foo].Field', 'Table[Id=Foo].arr[level=0].sub', 'Table[*].Field' (wildcard). Bare-value forms like Table[Foo] or arr[0] will be rejected by the parser. |
| value | string | yes | — | Value to apply (JSON or plain string) |
| refresh | bool | no | false | Force OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |

Usage
==

```js
await inzoi.cli.execute('data.patch', {
  method: '',
  query: '',
  value: '',
  refresh: false, // optional
});
```