---
slug: "/Wiki/script-execution/Exec_RevertTemporaryAppearance"
---

# [Exec]_RevertTemporaryAppearance

Overview
==

* Reverts the temporarily changed appearance of the specified character.

Details
==

| Parameter   | Description                     |
|-------------|---------------------------------|
| BaseObject  | Object to execute the command   |
| Command     | RevertTemporaryAppearance       |
| S1          | Enum for the appearance part to revert |

Notes
====

| S1 Enum Value                                         | Description     |
|-------------------------------------------------------|-----------------|
| EB1TemporaryChangeAppearanceType::HairColor           | Hair Color      |
| EB1TemporaryChangeAppearanceType::SkinTone            | Skin Tone       |
| EB1TemporaryChangeAppearanceType::BodyMassRatio       | Body Mass Ratio |
| EB1TemporaryChangeAppearanceType::MuscleMass          | Muscle Mass     |

Examples
==

| Example                        | BaseObject    | Command                  | S1                                                 |
|--------------------------------|---------------|---------------------------|----------------------------------------------------|
| Revert hair color              | Self / Target | RevertTemporaryAppearance | EB1TemporaryChangeAppearanceType::HairColor        |
| Revert body mass ratio         | Self / Target | RevertTemporaryAppearance | EB1TemporaryChangeAppearanceType::BodyMassRatio    |
