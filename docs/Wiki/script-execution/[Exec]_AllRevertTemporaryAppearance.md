---
slug: "/Wiki/script-execution/Exec_AllRevertTemporaryAppearance"
---

# [Exec]_AllRevertTemporaryAppearance

Overview
==

* Reverts all temporary appearance changes made to the specified character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AllRevertTemporaryAppearance |

Reference
====

| Appearance Types |  |
| --- | --- |
| EB1TemporaryChangeAppearanceType::HairColor | Hair color |
| EB1TemporaryChangeAppearanceType::SkinTone | Skin tone |
| EB1TemporaryChangeAppearanceType::BodyMassRatio | Obesity level |
| EB1TemporaryChangeAppearanceType::MuscleMass | Muscle mass |

Example
==

| Example | BaseObject | Command |
| --- | --- | --- |
| Revert all appearance changes | Self / Target | AllRevertTemporaryAppearance |
