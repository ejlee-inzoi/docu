## 🎛️ Enum: EB1TargetFilterType

Determines the type of filter applied to identify a specific interaction or object target.

- **Invalid**: Find game objects that can use the specified InteractionBag Id..  
- **InteractionBagId**: Find game objects that can use interactions categorized under InteractionBagCategory.  
- **InteractionBagCategory**: Find the game object with the specified ObjectId.  
- **ObjectId**: Find game objects with the specified ObjectTag.  
- **Character**: Find Joy characters currently located on the same site.  
- **CarriedObject**: Targets the currently carried object.  
- **AutoPutDown**: Finds where the carried object should be placed.  
- **Vehicle**: Targets a vehicle.  
- **OwnedVehicle**: Find vehicles owned by the player.  
- **VehiclePassenger**: Find Joy characters seated in a vehicle.(Only works when the target is a vehicle.).  
- **ConnectedChairObject**: Find chair objects connected to the target.(e.g., A chair in front of a computer)
- **RelationshipStat**: Among Joy characters who have a relationship with the player, find those based on relationship comparison.
Vehicle: Find vehicles within range.  
- **Site**: Find site area sites within range.  
- **CharacterDiningSlot**: Find carriable objects placed on the table in front of a Joy character.  
- **PutDownDiningSlot**: Targets where food can be placed.  
- **PickedObjectSlot**: Find a specific object slot of the selected object.  
- **ChairObject**: Find chairs within range.  
- **CoopRole**: Filters for cooperative interaction roles.  
- **Tag**: Filters by tag (S1: Character, GameObject, Vehicle).  
- **EntityTag**: Find type objects that have the EntityTag  
- **PickedObjectOccupiedSlot**: Filters for occupied slot on picked object.  
- **SiteEventRole**: Find Joy characters participating in the same site or social event role.  
- **Engagement**: Find the engaged partner.  
- **Spouse**: Find the spouse.  
- **TalkLocation**: Filters by available talk location.  
- **ServiceTrigger**: When the player is performing a service (e.g., firefighter, police officer), find the Joy who requested the service (trigger).
- **ServiceExecutioner**: Find the Joy character(s) performing the service requested by the player.  
- **ObjectTag**: Filters by object tag.  
- **InteractionBagIdDoNotCheckOccupyEntityId**: Filters InteractionBag without checking entity ID.  