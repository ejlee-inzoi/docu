# 📘 ColorMapping Data Guide

## 🧩 Struct: FB1ColorTableRow

Defines a color entry used in the UI, palettes, or customization systems.

### Properties

- **Id** (`FName`): Unique identifier for this color entry.  
- **ColorString** (`FString`): Hexadecimal color string (e.g., `#FFCCAAFF`).  
- **VisibleColor** (`FLinearColor`): Parsed linear color from `ColorString`, used for rendering. *(auto-calculated)*  

