# 📘 Site Data Guide

## 🧩 Struct: FB1SiteTableRow

Defines a buildable or interactable site in the game world, including default info and trigger settings.

### Properties

- **Id** (`FName`): Unique identifier for the site.  
- **DefaultInfo** (`FB1SiteDefaultInfo`): Default data used for display, size, weathering, rendering and etc.  
- **SiteHint** (`FName`): Optional hint text or debug tag associated with the site.  
- **SiteActionTriggers** (`TArray<FB1SiteActionTrigger>`): List of actions triggered based on time or condition while on site.  


## 📚 References

- [FB1SiteDefaultInfo](./Struct/FB1SiteDefaultInfo.md)
- [FB1SiteActionTrigger](./Struct/FB1SiteActionTrigger.md)
- [EB1SiteType](./Enum/EB1SiteType.md)
- [EB1SiteSubType](./Enum/EB1SiteSubType.md)