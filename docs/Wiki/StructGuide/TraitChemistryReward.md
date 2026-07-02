# 📘 TraitChemistryReward Data Guide

## 🧩 Struct: FB1TraitChemistryRewardTableRow

Defines a reward description based on a trait chemistry range. Used to present feedback or bonuses based on compatibility level.

### Properties
- **Id** (`FName`): Unique identifier for this reward range entry.
- **TextId** (`FString`): Localized text identifier that describes this chemistry range.
- **From** (`int32`): Minimum chemistry value (inclusive).
- **To** (`int32`): Maximum chemistry value (inclusive).