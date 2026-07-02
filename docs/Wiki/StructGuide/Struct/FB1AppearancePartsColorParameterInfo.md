## 🎨 Struct: FB1AppearancePartsColorParameterInfo

Defines a color material parameter for customizing a specific material section of the character's appearance.

### Properties

- **ListKey** (`FString`): Unique identifier used to distinguish the color parameter in character customization UI.
- **ParameterName** (`FName`): Name of the material parameter used to customize the color of a specific part of the character's appearance.
- **ParameterDescTextId** (`FString`): Localized description of the color parameter displayed in the UI.
- **MaterialSectionIndices** (`TArray<int32>`): List of material section indices where this color parameter should be applied.
