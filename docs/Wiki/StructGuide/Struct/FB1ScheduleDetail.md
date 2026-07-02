## 🧩 Struct: FB1ScheduleDetail

Defines a full schedule entry with associated site, conditions, scripts, and interaction orders.

### Properties

- **Site** (`FName`): ID of the site this schedule occurs at (e.g., Home, Company). *(Foreign = "Site.Id", ModTip = "{Home},{Company},{Spanwer},{RabbitHole}")*  
- **SiteTags** (`TArray<FName>`): Tags used to describe or filter the site. *(Foreign = "Site.Tags")*  
- **Orders** (`TArray<FB1Order>`): List of ordered interactions that take place during the schedule.  
- **ScheduleName** (`FName`): ID of the schedule template or name. *(Foreign = "ScheduleInfo.Id")*  
- **StartScriptIdList** (`TArray<FName>`): Scripts executed when the schedule begins. *(Foreign = "Script_SiteTimeline.Id")*  
- **FinishScriptIdList** (`TArray<FName>`): Scripts executed when the schedule ends. *(Foreign = "Script_SiteTimeline.Id")*  
- **ArrivedScriptIdList** (`TArray<FName>`): Scripts triggered when the actor arrives at the site. *(Foreign = "Script_SiteTimeline.Id")*  
- **CancelScriptIdList** (`TArray<FName>`): Scripts executed when the schedule is canceled. *(Foreign = "Script_SiteTimeline.Id")*  
- **SearchedScriptIdList** (`TArray<FName>`): Scripts executed when the actor performs a search action. *(Foreign = "Script_SiteTimeline.Id")*  
- **LeavedSiteScriptIdList** (`TArray<FName>`): Scripts executed when the actor leaves the site. *(Foreign = "Script_SiteTimeline.Id")*  
- **SearchTargetFilterIds** (`TArray<FName>`): Target filter IDs used to find a specific subject during the schedule. *(Foreign = "TargetFilter.Id")*  
- **SearchTargetConditions** (`TArray<FB1Condition>`): Additional conditions for validating the target search.  
- **bIsWorkingSchedule** (`bool`): Indicates whether this schedule represents a work-related task.  
- **bHasFlexibleOrder** (`bool`): If true, the schedule contains flexible order execution logic.  

## 📚 References

- [FB1Order](./FB1Order.md)
- [FB1Condition](./FB1Condition.md)
- [Site](../Site.md)
- [ScheduleInfo](../ScheduleInfo.md)
- [Script](../Script.md)
- [TargetFilter](../TargetFilter.md)