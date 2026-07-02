## 🧩 Struct: FB1InteractionReward

Defines a reward applied to a stat as a result of completing an interaction.

### Properties

- **StatId** (`FName`): ID of the stat affected by the reward. *(Foreign = "Stat.Id")*  
- **Reward** (`int32`): Value to be added to the stat.  
- **Tier** (`EB1StatServiceTier`): The service tier associated with this reward.  

## 📚 References

- [EB1StatServiceTier](../Enum/EB1StatServiceTier.md)