# 📘 SavePreset Data Guide

# 📘 FB1SavePresetTableRow

Defines a preset group of saveable types or categories, typically used to organize and label saved data configurations in the UI.(Currently not used)

### Properties

- **Id** (`FName`): Unique identifier for this save preset group.
- **Selections** (`TArray<FB1SavePresetSelection>`): List of preset selections, each with a category key and localized type label.

@include Data/StructGuide/Struct/FB1SavePresetSelection