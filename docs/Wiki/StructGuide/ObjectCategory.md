# 📘 ObjectCategory Data Guide

## 🧩 Struct: FB1ObjectCategoryTableRow

Defines categories for object placement, grouping multiple tags and subcategories together.

### Properties

- **Id** (`FName`): Unique identifier for this category.  
- **Mode** (`FName`): Placement mode or editing mode this category applies to.  
- **Categories** (`TArray<FB1ObjectCategoryEntry>`): List of entries within this category.  


## 📚 References

- [FB1ObjectCategoryEntry](./Struct/FB1ObjectCategoryEntry.md)
- [FB1ObjectMiddleCategoryEntry](./Struct/FB1ObjectMiddleCategoryEntry.md)
- [FB1ObjectSubCategoryEntry](./Struct/FB1ObjectSubCategoryEntry.md)