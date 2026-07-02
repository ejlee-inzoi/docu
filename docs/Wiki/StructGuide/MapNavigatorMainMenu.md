# 📘 MapNavigatorMainMenu Data Guide

## 🧩 Struct: FB1MapNavigatorMainMenuInfoTableRow

Defines a main navigation tab entry shown in the map navigation UI, including submenus and display label.

### Properties

- **Id** (`FName`): Unique identifier for this navigation tab.  
- **DisplayNameTextId** (`FString`): Localization key for the tab's name. *(StringTableKey = "Id")*  
- **SubMenuList** (`TArray<FB1MapNavigatorSubMenuInfo>`): List of submenu entries associated with this tab.  

## 📚 References

- [FB1MapNavigatorSubMenuInfo](./Struct/FB1MapNavigatorSubMenuInfo.md)
- [EB1MapNavigatorMenuType](./Enum/EB1MapNavigatorMenuType.md)

