# 📘 AppearanceMakeupParts Data Guide

## 🧩 Struct: FB1AppearanceMakeupPartsTableRow

Metadata for each makeup part, including the name of the texture parameter used for the makeup part, the number and names of color channels, and scalar parameters per channel.

### Properties

- **Id** (`FName`): Unique identifier for the makeup part.  
- **DescTextId** (`FString`): Localized description for the makeup part. *(StringTableKey = "Id")* *(Category = UI)*  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail texture displayed in the character customization makeup category list. *(Category = UI)*  
- **TextureParameterName** (`FName`): Name of the material parameter that determines which texture is applied to the makeup area.
- **AppearanceParts** (`EB1AppearanceParts`): Parts Data Used to differentiate between appearance types like hair and faceHair when applying customization parameters.
- **DataTableName** (`FName`): Reference to the datatable used to load list items for this customization part in the character customization UI.
- **ChannelData** (`TArray<FB1MakeupChannelInfo>`): Defines customizable channels for this appearance part, including color and scalar material parameters used in the character customization UI.


## 📚 References

- [FB1MakeupChannelInfo](./Struct/FB1MakeupChannelInfo.md)
- [EB1AppearanceParts](./Enum/EB1AppearanceParts.md)