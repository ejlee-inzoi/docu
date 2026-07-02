# 📘 Grab Data Guide

## 🧩 Struct: FB1GrabTableRow

Defines grab behavior for objects, including animations for pick-up, looping, and put-down stages.

### Properties

- **Id** (`FName`): Unique identifier for this grab entry.  
- **PickUpAnimations** (`TArray<FB1GrabTransition>`): Animations played when the object is picked up.  
- **LoopAnimId** (`FName`): Animation played while the object is held. *(Foreign = "AnimCharacter_Posture.Id")*  
- **PutDownAnimations** (`TArray<FB1GrabTransition>`): Animations played when the object is released.  


## 📚 References

- [FB1GrabTransition](./Struct/FB1GrabTransition.md)