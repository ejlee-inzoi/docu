# 📘 Sku Data Guide

## 🧩 Struct: FB1SkuTableRow

Defines a store product (SKU), typically bundling multiple appearance preset items for sale or presentation.

### Properties

- **Id** (`FName`): Unique identifier for the SKU.  
- **DescriptionTextId** (`FString`): Localized description for this SKU. *(StringTableKey)*  
- **ItemIds** (`TArray<FName>`): IDs of bundled appearance items. *(Foreign = "AppearancePreset.Id")*  
- **Categories** (`TArray<FString>`): UI or filter categories this SKU belongs to.  
- **GenderType** (`TArray<FString>`): Genders this SKU supports.  
- **BodyType** (`TArray<FString>`): Body types associated with this SKU.  
- **GrowthStep** (`TArray<FString>`): Growth stages supported by this SKU.  
