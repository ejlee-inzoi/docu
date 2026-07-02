# 📘 InteractionCategory Data Guide

## 🧩 Struct: FB1InteractionCategoryTableRow

Defines a named interaction category used for sorting and filtering interactions in the UI.

### Properties

- **Id** (`FName`): Category identifier.  
- **NameTextId** (`FString`): Localized category name. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Category icon. *(AllowedClasses = Texture2D)*  
- **InteractionTagInfos** (`TArray<FB1InteractionTagInfo>`): List of tags associated with this category.  


## 📚 References

- [FB1InteractionTagInfo](./Struct/FB1InteractionTagInfo.md)
