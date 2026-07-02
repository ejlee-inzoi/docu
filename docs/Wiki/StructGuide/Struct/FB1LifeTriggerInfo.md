## 🧩 Struct: FB1LifeTriggerInfo

Defines a trigger for life events, such as aging, death, or milestone interactions.

### Properties

- **AgingConditionFlags** (`int32`): Bitmask representing required growth stages for triggering this event. *(BitmaskEnum = EB1GrowthStep)*  
- **AlertPopupId** (`FName`): Specifies the popup ID to display once the AlertDelayTime has elapsed. *(Foreign = "Popup.Id")*  
- **EndPopupId** (`FName`): Popup shown when the life event ends. *(Foreign = "Popup.Id")*  
- **AlertDelayTime** (`float`): Delay (in minute) before the alert popup is shown. *(ClampMin = 0)*  
- **FromAlertTimeToEnd** (`float`): Time (in minute) span between alert and actual end event. *(ClampMin = 0)*  
- **IsDeathTrigger** (`bool`): If true, this life trigger represents a death-related event.  
- **TriggerInteractionId** (`FName`): Interaction that triggers the event. *(Foreign = "InteractionBag.Id")*  
- **TriggerScriptId** (`FName`): Script executed when the event is triggered. *(Foreign = "Script_Life.Id")*  
- **OnDeathScriptId** (`FName`): Script executed on related entities when the death occurs. *(Foreign = "Script_Life.Id")*  
- **OnDeathSiteActionId** (`FName`): Site action executed once upon death, based on the character’s site. *(Foreign = "SiteAction.Id")*  

## 📚 References

- [Popup](../Popup.md)
- [InteractionBag](../InteractionBag.md)
- [Script](../Script.md)
- [SiteAction](../SiteAction.md)