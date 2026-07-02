## 🧩 Struct: FB1MakeupChannelInfo

Defines customizable channel for this appearance part, including color and scalar material parameters used in the character customization UI.

### Properties

- **ListKey** (`FString`): Unique key used to identify this channel entry in lists.  
- **MaskChannel** (`EB1MakeupChannel`): Channel (R, G, B, A) in the mask texture to which this customization data applies.  
- **DescTextId** (`FString`): Localized description for the channel's name displayed in the character customization UI. *(StringTableKey)*  
- **ColorParameters** (`TArray<FB1AppearancePartsColorParameterInfo>`): List of color parameters that are customizable in this channel.  
- **ScalarParameters** (`TArray<FB1AppearancePartsScalarParameterInfo>`): List of scalar parameters that are customizable in this channel.  

## 📚 References

- [FB1AppearancePartsColorParameterInfo](./FB1AppearancePartsColorParameterInfo.md)
- [FB1AppearancePartsScalarParameterInfo](./FB1AppearancePartsScalarParameterInfo.md)

#### 🧩 Enum: EB1MakeupChannel

Represents individual RGBA channels used for layering or isolating parts of a makeup mask texture.

- **R**: Red channel (index 0).
- **G**: Green channel (index 1).
- **B**: Blue channel (index 2).
- **A**: Alpha channel (index 3).
