## 🧩 Struct: FB1RandomAnimInfo

Defines a random animation and voice pairing used in dialogue or interaction systems.

### Properties

- **AnimId** (`FName`): ID of the character animation. *(Foreign = "AnimCharacter_Talk.Id")*  
- **VoiceId** (`FName`): ID of the voice line to be played. *(Foreign = "VoiceResources.Id")*  
- **Weight** (`float`): Probability weight for selecting this entry.  

## 📚 References

- [AnimCharacter](../AnimCharacter.md)
- [VoiceResources](../VoiceResources.md)