# 📘 SiteDetailInfo Data Guide

## 🧩 Struct: FB1SiteDetailInfoTableRow

Defines detailed configuration for a site, such as resident limits and required objects.

### Properties

- **Id** (`FName`): Unique identifier for this detailed site info.  
- **ResidentMaxCount** (`int32`): Maximum number of residents allowed in this site.  
- **ResidentMinCount** (`int32`): Minimum number of residents required for this site to be functional.  
- **RequiredObjects** (`TArray<FB1SiteRequiredObjectInfo>`): List of objects required to complete or activate the site.  


## 📚 References

- [FB1SiteRequiredObjectInfo](./Struct/FB1SiteRequiredObjectInfo.md)

