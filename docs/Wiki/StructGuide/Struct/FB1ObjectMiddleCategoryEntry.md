## 🧩 Struct: FB1ObjectMiddleCategoryEntry

Defines a subcategory (middle category) within an object category, including UI layout and nested subcategories.

### Properties

- **ListKey** (`FString`): Internal identifier for this middle category.  
- **WBPName** (`FName`): Name of the associated widget blueprint.  
- **CategoryName** (`FText`): Localized name for the middle category. *(StringTableKey)*  
- **CanvasKey** (`FString`): Key used for Canvas.  
- **SubCategories** (`TArray<FB1ObjectSubCategoryEntry>`): List of subcategory entries.  

## 📚 References

- [FB1ObjectSubCategoryEntry](./FB1ObjectSubCategoryEntry.md)