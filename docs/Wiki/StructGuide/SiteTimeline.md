# 📘 SiteTimeline Data Guide

## 🧩 Struct: FB1SiteTimelineTableRow

Defines a timeline of scheduled events or NPC activity within a site.

### Properties

- **Id** (`FName`): Unique identifier for this site timeline entry.  
- **SiteNpcEvent** (`TArray<FB1SiteSchedule>`): Timeline of scheduled site-level NPC activities.  
- **SiteEnterScriptIdList** (`TArray<FName>`): Scripts executed when entering the site. *(Foreign = "Script_SiteTimeline.Id")*  
- **SiteLeaveScriptIdList** (`TArray<FName>`): Scripts executed when leaving the site. *(Foreign = "Script_SiteTimeline.Id")*  


## 📚 References

- [FB1SiteSchedule](./Struct/FB1SiteSchedule.md)
- [FB1DepartmentKey](./Struct/FB1DepartmentKey.md)
- [FB1Condition](./Struct/FB1Condition.md)
- [EB1BaseObject](./Enum/EB1BaseObject.md)
- [EB1CompareType](./Enum/EB1CompareType.md)
- [EB1ConditionType](./Enum/EB1ConditionType.md)