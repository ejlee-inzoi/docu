## 🧩 Struct: FB1UIOpenGroup

Defines a UI widget group policy that ensures only one widget in the group is open at a time, and controls which widgets should open or close together.

### Properties

- **GroupName** (`FName`): Name of the UI group. Only one widget in the same group can remain open at a time; others are closed automatically.  
- **CloseWidgetListWhenOpen** (`TArray<EB1UIType>`): List of UI widgets to automatically close when this widget opens.  
- **OpenWidgetListWhenClose** (`TArray<EB1UIType>`): List of UI widgets to automatically open when this widget is closed.  
- **CloseWidgetListWhenClose** (`TArray<EB1UIType>`): List of UI widgets to automatically close when this widget is closed.  

## 📚 References

- [EB1UIType](../Enum/EB1UIType.md)
