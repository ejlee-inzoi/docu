## 🧩 Struct: FB1AnimSequenceInfo

Defines a gender- and age-specific animation sequence used for character behaviors or motion variants.

### Properties

- **Gender** (`EB1GenderType`): Gender type used to determine which animation variant applies.  
- **BodyAge** (`EB1BodyAgeType`): Physical age category of the character (e.g., Baby, Youth, Adult).  
- **Animation** (`TSoftObjectPtr<UAnimSequence>`): The animation sequence asset to be played.  

## 📚 References

- [EB1GenderType](../Enum/EB1GenderType.md)
- [EB1BodyAgeType](../Enum/EB1BodyAgeType.md)