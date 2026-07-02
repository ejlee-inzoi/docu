## 🎯 Enum: EB1AutoFindTargetType

Defines strategies used to automatically find an interaction target in autonomous simulations.

- **None**: No target search; action has no specific target.  
- **Picked**: Uses the object or entity explicitly picked by the player or system.  
- **InteractionBagId**: Finds target matching a specific interaction bag ID.  
- **InteractionBagCategory**: Searches based on interaction bag category type.  
- **ObjectId**: Targets a specific object by unique ID.  
- **ObjectCategory**: Searches for an object matching a category type.  
- **Character**: Finds another character as the target.  
- **CarriedObject**: Uses the object currently being carried as the target.  
- **ConnectedChairObject**: Finds the chair or seat that is connected to the object currently being interacted with.  
