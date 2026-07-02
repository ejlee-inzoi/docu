## 🧩 Struct: FB1ObjectCategoryEntry

Defines a top-level object category for UI organization and customization.

### Properties

- **ListKey** (`FString`): Internal identifier for this category.  
- **Category** (`FName`): ID for the object category.  
- **CategoryName** (`FText`): Localized name for the category shown in UI. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon for the category. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **TooltipTexture** (`TSoftObjectPtr<UObject>`): Tooltip image for extended UI display.  
- **DevOnly** (`bool`): If true, this category is shown only in development builds.  
- **VisibleButton** (`bool`): If true, this category displays as a UI button.  
- **WidgetIndex** (`int32`): Index to activate the corresponding widget,.  
- **MiddleCategories** (`TArray<FB1ObjectMiddleCategoryEntry>`): List of subcategories under this category.  

## 📚 References

- [FB1ObjectMiddleCategoryEntry](./FB1ObjectMiddleCategoryEntry.md)