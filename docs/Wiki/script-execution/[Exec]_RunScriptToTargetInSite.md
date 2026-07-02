---
slug: "/Wiki/script-execution/Exec_RunScriptToTargetInSite"
---

# [Exec]_RunScriptToTargetInSite

Overview
==

* Executes a script targeting objects within the same site.

Details
==

| Parameter   | Description                            |
|-------------|----------------------------------------|
| BaseObject  | Object to execute the command          |
| Command     | RunScriptToTargetInSite                |
| S1          | ScriptId (Only Interaction scripts)    |

Examples
==

| Example                                           | BaseObject | Command                 | S1                  | S2 | F1 | F2 | Prob |
|---------------------------------------------------|------------|--------------------------|---------------------|----|----|----|------|
| Replace all broken objects in the site            | Self       | RunScriptToTargetInSite | Exchange_In_Site    |    |    |    |      |
