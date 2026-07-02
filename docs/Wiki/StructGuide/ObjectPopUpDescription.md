# 📘 ObjectPopUpDescription Data Guide

## 🧩 Struct: FB1ObjectPopUpDescriptionTableRow

Defines popup display behavior for an object when selected or hovered.

### Properties

- **Id** (`FName`): Unique identifier for the popup entry.  
- **ShowState** (`bool`): Whether the current state of the object is shown.  
- **ShowTimeToChange** (`bool`): Whether time-based state changes are displayed.  
- **ShowTimeToChangeStatName** (`FName`): Stat reference that tracks time-to-change. *(Foreign = "Stat.Id")*  


