## 🧩 Struct: FB1CityEditMenu

Defines a top-level tab in the city editor menu, including its category type, localized texts, and sub-tabs.

### Properties

- **CategoryType** (`FName`): Type or classification for this menu category (e.g., Trees, Buildings).  
- **DisplayNameTextId** (`FString`): Localization key for the menu's display title. *(StringTableKey)*  
- **DescriptionTextId** (`FString`): Localization key for the menu's tooltip or description. *(StringTableKey)*  
- **SubTabList** (`TArray<FB1CityEditMenuSubTab>`): List of sub-tabs belonging to this menu category.  

## 📚 References

- [FB1CityEditMenuSubTab](./FB1CityEditMenuSubTab.md)