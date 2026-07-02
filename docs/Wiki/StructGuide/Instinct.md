# 📘 Instinct Data Guide

## 🧩 Struct: FB1InstinctTableRow

Defines an instinctive behavior for characters, such as emotional or autonomous responses triggered by age or script.

### Properties

- **Id** (`FName`): Unique identifier for this instinct.  
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth stages this instinct applies to.  
- **AddScriptId** (`FName`): Script triggered when this instinct is added. *(Foreign = "Script_Instinct.Id")*  
- **RemoveScriptId** (`FName`): Script triggered when this instinct is removed. *(Foreign = "Script_Instinct.Id")*  
- **InstinctScripts** (`TArray<FB1TraitScript>`): Enables script execution either through an external trigger or internal cooldown, based on the specified Type.


## 📚 References

- [FB1TraitScript](./Struct/FB1TraitScript.md)
- [FB1TraitEventTrigger](./Struct/FB1TraitEventTrigger.md)
- [EB1TraitEntryType](./Enum/EB1TraitEntryType.md)
- [EB1TraitEventTriggerType](./Enum/EB1TraitEventTriggerType.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)