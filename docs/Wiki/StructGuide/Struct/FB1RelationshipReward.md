## 🧩 Struct: FB1RelationshipReward

Defines a reward applied to a relationship stat during an interaction.

### Properties

- **Target** (`EB1BaseObject`): Target to which the reward is applied (e.g., Self, Target).  
- **RelationshipStatId** (`FName`): ID of the relationship stat affected. *(Foreign = "RelationshipStat.Id")*  
- **LevelFrom** (`int32`): Minimum level required for the reward to apply.  
- **LevelTo** (`int32`): Maximum level range for the reward to apply.  
- **Bonus** (`int32`): Reward value applied to the stat.  

## 📚 References

- [EB1BaseObject](../Enum/EB1BaseObject.md)
- [RelationshipStat](../RelationshipStat.md)