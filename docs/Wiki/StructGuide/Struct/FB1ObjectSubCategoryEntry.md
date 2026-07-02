## 🧩 Struct: FB1ObjectSubCategoryEntry

Defines a subcategory within the object customization UI, including display name and icons.

### Properties

- **ListKey** (`FString`): Internal key used for data referencing.  
- **Category** (`FName`): ID of the subcategory.  
- **CategoryName** (`FText`): Localized name for the subcategory. *(StringTableKey)*  
- **CanvasKey** (`FString`): Key for canvas layout or grouping logic.  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Visual icon representing this subcategory.  
- **DevOnly** (`bool`): If true, this entry is only visible in development environments.  
- **StudioOnly** (`bool`): If true, this entry is used exclusively in studio/editor mode.  
