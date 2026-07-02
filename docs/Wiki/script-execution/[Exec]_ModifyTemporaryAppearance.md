---
slug: "/Wiki/script-execution/Exec_ModifyTemporaryAppearance"
---

# [Exec]_ModifyTemporaryAppearance

Overview
==

* Temporarily modifies the appearance of the specified character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object (character) on which to execute the command |
| Command | ModifyTemporaryAppearance |
| S1 | Enum representing the part of the appearance to modify |
| S2 | Color or value to apply (Hex color code or float between 0–1) |
| F1 | Duration to maintain the appearance change (in in-game minutes) |

Reference
====

| S1 Enum | Description | Value Type | Notes |
| --- | --- | --- | --- |
| EB1TemporaryChangeAppearanceType::HairColor | Hair color | Color Hex | Hair parts are managed separately and will not be handled here |
| EB1TemporaryChangeAppearanceType::SkinTone | Skin tone | Color Hex | - |
| EB1TemporaryChangeAppearanceType::BodyMassRatio | Body fat ratio | Float | - |
| EB1TemporaryChangeAppearanceType::MuscleMass | Muscle mass | Float | - |

Color Hex Reference  
See: `ColorMapping.json`, `AppearanceSkinColor.json`

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 |
| --- | --- | --- | --- | --- | --- |
| Change skin tone | Self / Target | ModifyTemporaryAppearance | EB1TemporaryChangeAppearanceType::SkinTone | B59A8AFF | 1440 |
| Change body fat ratio | Self / Target | ModifyTemporaryAppearance | EB1TemporaryChangeAppearanceType::BodyMassRatio | 0.8 | 1440 |
