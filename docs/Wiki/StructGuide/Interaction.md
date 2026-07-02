# 📘 Interaction Data Guide

## 🧩 Struct: FB1InteractionTableRow

Defines a single interaction entry, including conditions, slot usage, targeting, and scripts.

### Properties

- **Id** (`FName`): Unique identifier for this interaction.  
- **InteractionTags** (`TArray<FName>`): Tags used to categorize or group this interaction.  
- **ConditionId** (`FName`): Condition that must be satisfied to enable this interaction. *(Foreign = "InteractionCondition.Id")*  
- **InteractionSlotUsage** (`EB1SlotUsageType`): Specifies the type of slot utilized by the interaction. (e.g., None, Interaction, Object, Fx, ExtraRequireSpace, Audio).
- **EnableSlotTags** (`TArray<FName>`): List of slot tags that enable this interaction when matched.  
- **ObjectSlotUsage** (`EB1SlotUsageType`): How this interaction uses object slots.  
- **ActionIdList** (`TArray<FName>`): Actions performed during the interaction. *(Foreign = "Action_Interaction.Id")*  
- **InteractionRepeatInfoId** (`FName`): ID used to repeat the same interaction under certain logic. *(Foreign = "Interaction.Id")*  
- **FeedbackInteractionBagId** (`FName`): Interaction bag of feedback interactions triggered after this interaction. *(Foreign = "InteractionBag.Id")*  
- **FeedbackTarget** (`EB1FeedbackTarget`): Target affected by the FeedbackInteractionBagID.
- **AutoFindTargetType** (`EB1AutoFindTargetType`): How the system finds a target automatically for this interaction.  
- **AutoFindId** (`FName`): Identifier used to resolve auto-find logic.  
- **AutoFindTargetInfoList** (`TArray<FB1AutoFindTargetInfo>`): List of alternate or advanced auto-targeting rules.  
- **TargetFilterInfoList** (`TArray<FB1TargetFilterInfo>`): Conditions used to filter valid targets.  
- **TargetFilterFindAll** (`bool`): If true, the interaction applies to all matching targets instead of just one.  
- **NoneTargetPlayable** (`bool`): If true, this interaction can be executed without a target.  
- **CheckSlotToEntity** (`bool`): If true, validates slot assignment against the target entity.  
- **EnableOnlyConnectedChairObjectSlot** (`bool`): If true, restricts slot use to those connected to chair objects.  
- **StartScriptIdList** (`TArray<FName>`): Scripts executed at the start of the interaction. *(Foreign = "Script_Interaction.Id")*  
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed if the interaction is canceled. *(Foreign = "Script_Interaction.Id")*  
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed upon interaction completion. *(Foreign = "Script_Interaction.Id")*  
- **ConsumeCurrencyId** (`FName`): Currency type required to perform the interaction. *(Foreign = "Currency.Id")*  
- **ConsumeCurrencyValue** (`int64`): Amount of currency consumed when the interaction is executed.  



@include Data/StructGuide/Struct/FB1AutoFindTargetInfo
@include Data/StructGuide/Enum/EB1AutoFindTargetType
@include Data/StructGuide/Struct/FB1TargetFilterInfo
@include Data/StructGuide/Enum/EB1SlotUsageType
@include Data/StructGuide/Enum/EB1FeedbackTarget