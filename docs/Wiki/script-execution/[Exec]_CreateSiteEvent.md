---
slug: "/Wiki/script-execution/Exec_CreateSiteEvent"
---

# [Exec]_CreateSiteEvent

Overview
==

* Creates a social event for the Self Joy using a specified template.  
* **Note:** The event may fail to spawn in the following cases:
  + It does not meet the conditions defined in the SocialEvent table.  
    - Example: A wedding event won't trigger if the character is not engaged.
  + There are not enough eligible participants to fulfill required roles.  
    - Since the event is generated via script, roles are auto-assigned, and if there are too few available characters, it may fail.

Details
==

| Parameter | Description |
| --- | --- |
| Command | CreateSiteEvent |
| S1 | SocialEventTemplateTable ID |
| S2 | TimeSettingType  
  * `FastHour` – Next available full hour  
  * `FastNoon` – Next available noon  
  * `CurrentHour` – Current hour (e.g., 9:30 → 9:00) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Create a Date event for Self at the next full hour | Self | CreateSiteEvent | Date | FastHour |  |  |  |
| Create a Wedding event for Self at the next noon | Self | CreateSiteEvent | Wedding | FastNoon |  |  |  |
