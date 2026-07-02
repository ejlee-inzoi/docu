## 🧩 Struct: FB1DreamAnimInfo

Defines posture-based dream animation configuration including full-body and facial animations.

### Properties

- **PostureId** (`FName`): Posture required for this dream animation to be valid. *(Foreign = "Posture.Id")*  
- **AnimId** (`FName`): Main animation ID associated with the posture. *(Foreign = "AnimCharacter_Posture.Id")*  
- **FaceAnimId** (`FName`): Facial animation to play alongside the main animation. *(Foreign = "AnimCharacter_Posture.Id")*  

## 📚 References

- [Posture](../Posture.md)
- [AnimCharacter](../AnimCharacter.md)