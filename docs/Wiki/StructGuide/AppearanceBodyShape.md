# 📘 AppearanceBodyShape Data Guide

## 🧩 Struct: FB1AppearanceBodyShapeTableRow

Defines a body shape preset for character appearance, including visual modifiers, gender/age filters, and hair configuration.

### Properties

- **Id** (`FName`): Unique identifier for this body shape preset.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the body shape in UI.  
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)*  
- **HiddenFromUI** (`bool`): If true, this option is hidden from the customization interface.  
- **MuscleDefinition** (`float`): Intensity of muscle definition for the character's mesh.  
- **BodyMassRatio** (`float`): Body mass scaling factor. Affects overall size or bulk.  
- **BodyModifierParameters** (`FString`): Custom modifier parameters serialized as a string (e.g., JSON).  
- **GenderType** (`EB1GenderType`): Gender this body shape applies to.  
- **BodyAgeType** (`EB1BodyAgeType`): Age group this body shape supports.  
- **ChestHairIntensity** (`float`): Amount of chest hair to apply.  
- **ArmHairIntensity** (`float`): Amount of arm hair to apply.  
- **LegHairIntensity** (`float`): Amount of leg hair to apply.  
- **BodyHairColor** (`FString`): Hex color code for body hair (e.g., `#000000FF`).  

## 📚 References

- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)