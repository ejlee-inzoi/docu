## 🧩 Struct: FB1Order

Defines a scheduled interaction order used in timeline systems, including logic for randomization, locking, and priority.

### Properties

- **InteractionBagId** (`FName`): ID of the interaction bag to execute. *(Foreign = "InteractionBag.Id")*  
- **StatId** (`FName`): ID of the stat influenced by the interaction. *(Foreign = "Stat.Id")*  
- **TargetStatInteractionId** (`FName`): ID of a secondary interaction tied to stat tracking. *(Foreign = "InteractionBag.Id")*  
- **TargetSiteId** (`FName`): ID of the site where the interaction is performed. *(Foreign = "Site.Id")*  
- **Type** (`EB1OrderType`): Execution type (e.g., ONCE, PERSISTENT).  
- **bIsTimeFlexible** (`bool`): If true, allows time shifts during schedule adjustments. This means the time may be changed by other overlapping or conflicting schedules. 
- **RandomOrderInteraction** (`TArray<FB1RandomOrderInteraction>`): List of possible randomized interactions.  
- **RandomInteractionPickIndex** (`int32`): Index of the currently chosen random interaction, if any.  

## 📚 References

- [FB1RandomOrderInteraction](./FB1RandomOrderInteraction.md)
- [InteractionBag](../InteractionBag.md)
- [Stat](../Stat.md)
- [Site](../Site.md)