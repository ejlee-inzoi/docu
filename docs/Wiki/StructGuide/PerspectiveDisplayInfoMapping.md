# 📘 PerspectiveDisplayInfoMapping Data Guide

## 🧩 Struct: FB1PerspectiveDisplayInfoMappingTableRow

Maps a specific age group to a group of perspective display info, allowing different UI labels per age.

### Properties

- **Id** (`FName`): Age group identifier (e.g., EB1GrowthStep::Child).  
- **PerspectiveDisplayInfoGroupId** (`FName`): Group ID linking to UI display info. *(Foreign = "PerspectiveDisplayInfoGroup.Id")*  


