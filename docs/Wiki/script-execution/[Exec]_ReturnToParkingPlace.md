---
slug: "/Wiki/script-execution/Exec_ReturnToParkingPlace"
---

# [Exec]_ReturnToParkingPlace

Overview
==

* Sends the mount of the target (character) back to the parking place of their residence.

Details
==

| Parameter   | Description                   |
|-------------|-------------------------------|
| BaseObject  | Object to execute the command |
| Command     | ReturnToParkingPlace          |

Examples
==

| Example                                      | BaseObject | Command              | S1 | S2 | F1 | F2 | Prob |
|----------------------------------------------|------------|----------------------|----|----|----|----|------|
| Send my mount back to the home parking place | Self       | ReturnToParkingPlace |    |    |    |    | 1.0  |
| Send target's mount to their home parking    | Target     | ReturnToParkingPlace |    |    |    |    | 1.0  |
