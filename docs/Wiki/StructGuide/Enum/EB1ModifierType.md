## 🎛️ Enum: EB1ModifierType

Represents the type of modifier being applied.

- **Invalid**: Uninitialized or invalid modifier.  
- **None**: No modification.  
- **SkillExp**: Defines the multiplier for increasing or decreasing relationship points (Skill.Id).  
- **Relationship**: Affects relationship stat (RelationshipStat.Id).  
- **BuffTime**: Sets the multiplier for the duration of buffs (Buff.Id).  
- **EmotionBuffTime**: Sets the multiplier for the duration of buffs tied to specific emotions. (Emotion.Id).  
- **Stat**: Defines the multiplier applied when need points are modified via scripts or other systems. (Stat.Id).  
- **StatDecay**: Defines the multiplier applied when need points decrease naturally over time. (Stat.Id).  
- **AutonomyStat**: Defines the multiplier applied to the probability of selecting a specific need during autonomous behavior. (Stat.Id).  
- **AutonomyInteraction**: Defines the multiplier applied to the probability of selecting interactions with specific interaction tags during autonomy.(InteractionBag.Id).  
- **InteractionResult**: Affects the BaseResultPoint after an interaction is completed, influencing the selection of follow-up interactions. (Interaction.Id).  
- **InteractionBagResult**: Affects the BaseResultPoint of the interaction bag after an interaction is completed, influencing the selection of follow-up interactions. (InteractionBag.Id).  
- **InteractionSequenceProb**: Defines the multiplier applied to the probability of each interaction sequences.  
- **Job**: Related to job or career systems.  
- **Weathering**: Related to furniture weathering.  
- **GameConfig**: Related to game system configurations.  
- **InteractionBagReward**: Related to rewards from interaction bags.  
- **Howling**: Related to howling behavior.
- **Age**: Related to age-based systems.
- **DreamProbability**: Affects the probability of having a dream.
- **DreamPoolWeight**: Modifies the weight of dream-related actions.
- **SubAction**: Modifies a sub-action behavior.  
- **AutonomyStatHighPriority**: Influences the probability of prioritizing certain needs before selecting which need to satisfy autonomously. (Stat.Id).  
- **CraftingProgressTime**: Affects crafting progress time.  