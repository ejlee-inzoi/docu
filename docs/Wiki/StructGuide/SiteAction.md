# 📘 SiteAction Data Guide

## 🧩 Struct: FB1SiteActionTableRow

Defines a list of actions that can be executed on or within a site (e.g., activate effect, modify object).

### Properties

- **Id** (`FName`): Unique identifier for the site action entry.  
- **SiteActions** (`TArray<FB1SiteAction>`): Actions to be executed, including scripts and commands.  


## 📚 References

- [EB1SiteActionType](./Enum/EB1SiteActionType.md)
- [FB1SiteAction](./Struct/FB1SiteAction.md)
- [EB1SiteActionReason](./Enum/EB1SiteActionReason.md)
- [EB1SiteActionTarget](./Enum/EB1SiteActionTarget.md)