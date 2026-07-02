## 🧮 Struct: FB1AppearancePartsScalarParameterInfo

Defines a scalar material parameter for customizing a specific material section of the character's appearance.

### Properties

- **ListKey** (`FString`): Unique identifier used to distinguish the scalar parameter in character customization UI.
- **ParameterName** (`FName`): Name of the material parameter used to customize the scalar value of a specific part of the character's appearance.
- **ParameterDescTextId** (`FString`): Localized description of the scalar parameter displayed in the UI.
- **DefaultValue** (`float`): Default scalar value when the parameter is initialized.
- **MinValue** (`float`): Minimum value for the scalar parameter.
- **MaxValue** (`float`): Maximum value for the scalar parameter.
- **MaterialSectionIndices** (`TArray<int32>`): List of material section indices where this scalar parameter should be applied.
