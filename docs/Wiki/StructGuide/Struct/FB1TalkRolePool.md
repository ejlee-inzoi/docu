## 🧩 Struct: FB1TalkRolePool

Defines animation pools for different body regions used during cooperative talk interactions.

### Properties

- **FullBodyAnimPool** (`TArray<FB1BodyAnimInfo>`): List of full-body animations that the role may use.  
- **UpperBodyAnimPool** (`TArray<FB1BodyAnimInfo>`): List of upper-body-only animations for variation.  
- **FaceAnimPool** (`TArray<FName>`): List of facial animation IDs for talk reactions. *(Foreign = "AnimCharacter_Talk.Id")*  

## 📚 References

- [FB1BodyAnimInfo](./FB1BodyAnimInfo.md)
- [AnimCharacter](../AnimCharacter.md)
