# 📘 SiteTypeUIInfo Data Guide

## 🧩 Struct: FB1SiteTypeUIInfoTableRow

Defines UI settings for a specific site type, including visual indicators per state.

### Properties

- **Id** (`FName`): Unique identifier for the site type UI entry.  
- **SiteType** (`EB1SiteType`): The type of site this UI info applies to.  
- **Infos** (`TArray<FB1SiteTypeUIInfo>`): UI configuration per site state, such as colors, icons, and labels.  


## 📚 References

- [FB1SiteTypeUIInfo](./Struct/FB1SiteTypeUIInfo.md)
- [EB1SiteState](./Enum/EB1SiteState.md)