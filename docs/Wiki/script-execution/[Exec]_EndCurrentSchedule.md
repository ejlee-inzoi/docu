---
slug: "/Wiki/script-execution/Exec_EndCurrentSchedule"
---

# [Exec]_EndCurrentSchedule

Overview
==

* Forces the character to end their current schedule and immediately return home (triggering the "go home" interaction).
* The visible schedule bar in the UI will be updated based on the following rules:

  + If 2 or more hours have passed since the schedule started →  
    The schedule end time is adjusted to the current full hour, and the schedule is forcibly ended.  
    e.g., A schedule set for 10:00–18:00, canceled at 12:30 →  
    Since 2h 30min have passed, the schedule bar is shortened to end at 12:00 and ends there.

  + If less than 2 hours have passed since the schedule started →  
    The schedule is removed from the UI and forcibly ended.  
    e.g., A schedule set for 10:00–18:00, canceled at 11:59 →  
    Only 1h 59min passed, so the schedule bar is deleted (since it cannot shrink below the minimum duration).

**Note:** Even if the schedule bar changes due to this command, it is **not treated as a Custom Schedule**,  
so it should reset properly on the following day.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The main Joy (character) to apply the change to |
| Command | EndCurrentSchedule |
| S1 |  |
| F1 |  |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Forcefully end the current schedule | Self | EndCurrentSchedule |  |  |  |  |  |
