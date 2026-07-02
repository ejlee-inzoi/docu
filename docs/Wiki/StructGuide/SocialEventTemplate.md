# 📘 SocialEventTemplate Data Guide

# 📘 FB1SocialEventTemplateTableRow

Extends the base site event to provide configuration for social event templates. Includes preset object categories, guides, actionable interactions, and recommended site settings.

### Properties

- **Id** (`FName`): Unique identifier for the site event.  
- **EventType** (`EB1SiteEventType`): Type of site event (e.g., social event, fire).  
- **EventCategory** (`FName`): Defines the event category.  
- **DisplayInfo** (`FB1SiteEventDisplayInfo`): UI information for displaying event name, description, and icon.  
- **ConditionInfo** (`FB1SiteEventConditionInfo`): Conditions required to trigger the event.  
- **DurationHour** (`int32`): Length of the event in hours.  
- **ScheduleInfoId** (`FName`): ID of the schedule display used for this event. *(Foreign = "ScheduleInfo.Id")*  
- **RoleInfos** (`TArray<FB1SiteEventRoleInfo>`): List of roles assigned to characters participating in the event.  
- **bHideUI** (`bool`): A flag indicating whether the UI should be hidden when creating a social event in the schedule editor.
- **SocialEventType** (`SocialEventType`): Defines the type of social event. Options include: Normal (a standard social event) and Meeting (a planned meetup).
- **PresetObjectCategory** (`FName`): Object category used to preset or filter objects in this event (references `ObjectCategory.Category`).
- **GuideMainTextId** (`FString`): Localized guide text displayed as the main instruction for the event.
- **GuideSubTextId** (`FString`): Localized guide text displayed as a subtitle or helper text.
- **ActionInfos** (`TArray<FB1SocialEventActionInfo>`): List of defined actions that can occur during the social event.
- **RecommendSiteInfos** (`TArray<FB1SocialEventRecommendSiteInfo>`): Mapping of recommended sites per map for this event.

## 📚 References

- [FB1SocialEventActionInfo](./Struct/FB1SocialEventActionInfo.md)
- [FB1SocialEventActionCondition](./Struct/FB1SocialEventActionCondition.md)
- [FB1SocialEventInteractionTargetInfo](./Struct/FB1SocialEventInteractionTargetInfo.md)
- [FB1SocialEventRecommendSiteInfo](./Struct/FB1SocialEventRecommendSiteInfo.md)
- [EB1SocialEventActionTargetType](./Enum/EB1SocialEventActionTargetType.md)