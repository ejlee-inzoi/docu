---
slug: "/Wiki/script-execution/Exec_EndSleepwalking"
---

# [Exec]_EndSleepwalking

Overview
==

* Ends the sleepwalking state.  
* This execution is used to define the moment when sleepwalking ends.  
  Make sure to **always** include this at the end of a sleepwalking interaction!

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | EndSleepwalking |

Example
==

| Example | BaseObject | Command |
| --- | --- | --- |
| End sleepwalking for Self | Self | EndSleepwalking |
| End sleepwalking for Target | Target | EndSleepwalking |
