## 🧩 Struct: FB1CoopTalkInfo

Defines behavior, animation, and scripting data for a cooperative talk interaction between two characters.

### Properties

- **bOneTime** (`bool`): If true, the interaction plays only once and does not repeat.  
- **bFixedStand** (`bool`): If true, characters maintain a fixed standing position during the talk.  
- **bCancelCurrentInteraction** (`bool`): If true, the character cancels its current interaction before starting the coop talk.  
- **TargetInteractionBagId** (`FName`): ID of the target interaction bag used in the talk system. *(Foreign = "InteractionBag_Talk.Id")*  
- **HostAnimInfo** (`TArray<FB1RandomAnimInfo>`): List of full-body animations for the host character.  
- **HostUpperBodyAnimInfo** (`TArray<FB1RandomAnimInfo>`): List of upper body-only animations for the host.  
- **HostFaceAnimInfo** (`TArray<FB1RandomAnimInfo>`): List of facial animations for the host character.  
- **TargetAnimInfo** (`TArray<FB1RandomAnimInfo>`): List of full-body animations for the target character.  
- **TargetUpperBodyAnimInfo** (`TArray<FB1RandomAnimInfo>`): Upper body-only animations for the target character.  
- **TargetFaceAnimInfo** (`TArray<FB1RandomAnimInfo>`): Facial animations for the target character.  
- **StartScriptIds** (`TArray<FName>`): List of scripts to run when the coop talk starts. *(Foreign = "Script_Talk.Id")*  
- **FinishScriptIds** (`TArray<FName>`): List of scripts to run when the coop talk ends. *(Foreign = "Script_Talk.Id")*  

## 📚 References

- [FB1RandomAnimInfo](./FB1RandomAnimInfo.md)
- [InteractionBag](../InteractionBag.md)
- [Script](../Script.md)