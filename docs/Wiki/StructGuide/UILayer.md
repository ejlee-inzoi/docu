# 📘 UILayer Data Guide

## 🧩 Struct: FB1UILayerTableRow

Defines a UI layer with z-ordering and interaction settings.

### Properties

- **Id** (`FName`): Unique identifier for the UI layer.  
- **ZOrder** (`int32`): Drawing order for this layer; higher values are drawn on top.  
- **bMouseEnabled** (`bool`): If true, this layer accepts mouse input.  
- **HideLayers** (`TArray<FName>`): List of other layers to be hidden when this layer is shown. *(Foreign = "UILayer.Id")*  
