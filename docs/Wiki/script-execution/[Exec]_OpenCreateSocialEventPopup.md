---
slug: "/Wiki/script-execution/Exec_OpenCreateSocialEventPopup"
---

# [Exec]_OpenCreateSocialEventPopup

Overview
==

* Displays the social event creation UI for the Self Joy.

Details
==

| Parameter | Description |
| --- | --- |
| Command | OpenCreateSocialEventPopup |
| S1 | Social event category name. If specified, the popup will focus on that category only.  
  If left blank, all categories will be selectable. |
| S2 | TimeSettingType Time setting * FastHour - earliest noon * FastNoon - earliest noon * CurrentHour - current hour (ex. 9:30 → 9:00) |
| F1 | Duration of the event (in hours) |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Open social event creation UI for Self, focusing on the "Date" category, with time calculated from formula | Self | OpenCreateSocialEventPopup | Date | TimeFormula_FastHour |  |  |  |
| Open social event creation UI for Self, focusing on the "Wedding" category, with time calculated from formula | Self | OpenCreateSocialEventPopup | Wedding | TimeFormula_FastNoon |  |  |  |
