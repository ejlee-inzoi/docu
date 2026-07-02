# 📘 GarmentSubCategory Data Guide

## 🧩 Struct: FB1GarmentSubCategoryTableRow

Data for a subcategory in the character customization garment list.  
Used to group garments into more specific categories within the UI.

### Properties

- **Id** (`FName`): Unique ID of the subcategory.  
- **NameTextId** (`FString`): Subcategory name displayed in the game, localized based on language settings. *(StringTableKey = "Id")*  
- **ParentCategory** (`FName`): ID of the parent category.  
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Path to the thumbnail image asset for the subcategory.
