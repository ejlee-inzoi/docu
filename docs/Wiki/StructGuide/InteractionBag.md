# 📘 InteractionBag Data Guide

## 🧩 Struct: FB1InteractionBagTableRow

Defines a group of related interactions, including display settings, scripts, rewards, and behavior flags.

### Properties

- **Id** (`FName`): Unique identifier for this interaction bag.  
- **InteractionRewards** (`TArray<FB1InteractionReward>`): List of rewards granted from interactions.
- **PreferenceRewards** (`TArray<FB1InteractionPreferenceReward>`): List of preference-based rewards granted from interactions.
- **InteractionBagTags** (`TArray<FName>`): Tags associated with this interaction bag.
- **AutonomyGroupTag** (`FName`): InteractionBags are grouped by Autonomy GroupId. One of Grouped Interactions will be Selected before Evaluate Autonomy.
- **GroupID** (`FName`): Group ID to categorize interaction bags.
- **InteractionBagCategory** (`FName`): Category of this interaction bag.
- **StrongEmotionFilters** (`TArray<FB1EmotionFilterKey>`): Specifies which emotions allow this interaction bag to be available when having a strong emotion. Only applies to Talk interactions.
- **EnqueueConditionId** (`FName`): ID referencing the enqueue condition. *(Foreign = "EnqueueCondition.Id")*  
- **InteractionConditionId** (`FName`): ID referencing the interaction condition. *(Foreign = "InteractionCondition.Id")*  
- **AgingConditionFlags** (`int32`): Flags representing aging conditions. *(BitmaskEnum = EB1GrowthStep)*  
- **InteractionSequence** (`TArray<FB1InteractionSequenceInfo>`): List of interaction sequences associated with this bag.
- **DisplayInfo** (`FB1InteractionDisplayInfo`): Display information for this interaction bag.
- **bRejectable** (`bool`): Determines if this interaction can be rejected.  
- **bUniqueInQueue** (`bool`): Ensures uniqueness of this interaction in the queue.
- **bForFixedDesk** (`bool`): Determines if this interaction is fixed to a desk.
- **bNonCancelable** (`bool`): Determines if this interaction cannot be canceled.
- **SelectedScriptId** (`FName`): ID referencing the selected script (references DT_Script). *(Foreign = "Script_Interaction.Id")*  
- **StartScriptIds** (`TArray<FName>`): ID referencing the start script. *(Foreign = "Script_Interaction.Id")*  
- **FinishScriptIds** (`TArray<FName>`): ID referencing the finish script. *(Foreign = "Script_Interaction.Id")*  
- **ConsumeCurrencyId** (`FName`): ID of the currency required for this interaction. *(Foreign = "Currency.Id")*  
- **ConsumeCurrencyValue** (`int64`): Amount of currency required for this interaction.  
- **bIgnoreConsumeCurrencyCheck** (`bool`): Determines if currency consumption checks should be ignored.
- **bGhostAvailable** (`bool`): Determines if this interaction is available to ghosts.
- **bAlwaysExposeToSLM** (`bool`): Determines if this interaction should always be exposed to SLM.  
- **AutonomySLMCooltimeMin** (`int32`): Minimum cooldown time for SLM autonomy (in minutes).
- **ActionsPerformedInThePastHourText** (`FName`): Text ID for actions performed in the past hour.
- **ActionHintText** (`FName`): Text ID for action hints.
- **CurrentStateHintText** (`FName`): Text ID for current state hints.
- **ActionHintTextForSLM** (`FName`): Text ID for SLM-specific action hints.
- **ActionHintTextList** (`FName`): Text ID for a list of action hints.


## 📚 References

- [FB1InteractionReward](./Struct/FB1InteractionReward.md)
- [FB1InteractionPreferenceReward](./Struct/FB1InteractionPreferenceReward.md)
- [FB1TraitReward](./Struct/FB1TraitReward.md)
- [FB1PreferenceReward](./Struct/FB1PreferenceReward.md)
- [FB1EmotionReward](./Struct/FB1EmotionReward.md)
- [FB1RelationshipReward](./Struct/FB1RelationshipReward.md)
- [FB1InteractionDisplayInfo](./Struct/FB1InteractionDisplayInfo.md)
- [FB1InteractionSequenceInfo](./Struct/FB1InteractionSequenceInfo.md)
