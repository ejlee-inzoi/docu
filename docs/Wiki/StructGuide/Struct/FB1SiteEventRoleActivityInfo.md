## 🧩 Struct: FB1SiteEventRoleActivityInfo

Specifies activity behavior and restrictions for a role during a site event.

### Properties

- **AutonomyPickRatio** (`float`): Probability the role selects an activity autonomously.  
- **RecommendedActivitys** (`TArray<FName>`): List of preferred interaction bag IDs. *(Foreign = "InteractionBag.Id")*  
- **BannedActivitys** (`TArray<FName>`): List of prohibited interaction bag IDs. *(Foreign = "InteractionBag.Id")*  
- **DressCodeInfo** (`FB1SiteEventDressCodeInfo`): Dress code settings for this role.  

## 📚 References

- [FB1SiteEventDressCodeInfo](./FB1SiteEventDressCodeInfo.md)
- [InteractionBag](../InteractionBag.md)