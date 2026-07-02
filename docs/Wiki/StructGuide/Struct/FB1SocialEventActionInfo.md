## 🧩 Struct: FB1SocialEventActionInfo

Defines a social event action including visibility conditions, interaction settings, and execution timing.

### Properties

- **ActionId** (`FName`): Unique ID for this event action.  
- **VisibleConditions** (`TArray<FB1SocialEventActionCondition>`): List of conditions required for the action to be shown.  
- **InteractionBagId** (`FName`): ID of the interaction bag used for the action. *(Foreign = "InteractionBag.Id")*  
- **InteractionTargetInfo** (`FB1SocialEventInteractionTargetInfo`): Data that determines which object the interaction targets.  
- **bCanPlayAll** (`bool`): If true, this determines whether the action is executed during Play All scenario events.  
- **EvnetTargetInfo** (`FB1SiteEventTargetInfo`): Target information defining who or what is affected by the event.  
- **ActionDelayMinute** (`int32`): Delay in minutes before this action begins.  

## 📚 References

- [FB1SocialEventActionCondition](./FB1SocialEventActionCondition.md)
- [FB1SocialEventInteractionTargetInfo](./FB1SocialEventInteractionTargetInfo.md)
- [InteractionBag](../InteractionBag.md)