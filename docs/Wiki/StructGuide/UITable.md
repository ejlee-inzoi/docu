# 📘 UI Data Guide

## 🧩 Struct: FB1UITableRow

Defines a UI widget entry, including category, creation behavior, and grouping.

### Properties

- **Id** (`EB1UIType`): UI identifier enum value.  
- **Category** (`EB1UICategory`): Category classification (e.g., Common, Lobby, InGame).  
- **Widget** (`TSoftClassPtr<UUserWidget>`): Widget blueprint used for rendering.  
- **ZOrder** (`int32`): Drawing order when the widget is auto or lazily created.  
- **LayerName** (`FB1TableRowName`): Layer this widget belongs to. *(Foreign = "UILayer.Id")*  
- **CreationType** (`EB1WidgetCreationType`): How this widget is created (e.g., AutoCreatedAtStartup, PlacedOnOtherWidget).  
- **CustomCursorSetName** (`FName`): Cursor set name to apply when this UI is open.  
- **bAlwaysShowCursor** (`bool`): If true, cursor remains visible while this UI is shown.  
- **bDisableDLSSFG** (`bool`): If true, disables DLSS-FG when this widget is visible.  
- **UIOpenGroup** (`FB1UIOpenGroup`): UI Group for open/close UI behaviors.  


## 📚 References

- [EB1UIType](./Enum/EB1UIType.md)
- [EB1WidgetCreationType](./Enum/EB1WidgetCreationType.md)
- [FB1UIOpenGroup](./Struct/FB1UIOpenGroup.md)