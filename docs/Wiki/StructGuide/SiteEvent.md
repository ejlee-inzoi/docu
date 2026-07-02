# 📘 SiteEvent Data Guide

## 🧩 Struct: FB1SiteEventTableRow

Defines an event that takes place at a site, including type, duration, and participation roles.

### Properties

- **Id** (`FName`): Unique identifier for the site event.  
- **EventType** (`EB1SiteEventType`): Defines the type of social event. Options include: Normal (a standard social event) and Meeting (a planned meetup).
- **EventCategory** (`FName`): Defines the event category.  
- **DisplayInfo** (`FB1SiteEventDisplayInfo`): UI information for displaying event name, description, and icon.  
- **ConditionInfo** (`FB1SiteEventConditionInfo`): Conditions required to trigger the event.  
- **DurationHour** (`int32`): Length of the event in hours.  
- **ScheduleInfoId** (`FName`): ID of the schedule display used for this event. *(Foreign = "ScheduleInfo.Id")*  
- **RoleInfos** (`TArray<FB1SiteEventRoleInfo>`): List of roles assigned to characters participating in the event.  


## 📚 References

- [FB1SiteEventDisplayInfo](./Struct/FB1SiteEventDisplayInfo.md)
- [FB1SiteEventConditionInfo](./Struct/FB1SiteEventConditionInfo.md)
- [FB1SiteEventRoleInfo](./Struct/FB1SiteEventRoleInfo.md)
- [FB1SiteEventRoleActivityInfo](./Struct/FB1SiteEventRoleActivityInfo.md)
- [FB1SiteEventDressCodeInfo](./Struct/FB1SiteEventDressCodeInfo.md)
- [FB1SiteEventScriptInfo](./Struct/FB1SiteEventScriptInfo.md)
- [EB1SiteEventType](./Enum/EB1SiteEventType.md)
- [EB1OutfitCategory](./Enum/EB1OutfitCategory.md)