## 🧩 Struct: FB1CityEditMenuSubTab

Defines a sub-tab in the city editor menu, including layout behavior, input mode (slider/list), parameter mapping, and visual blend settings.

### Properties

- **Id** (`FName`): Unique identifier for this sub-tab entry.  
- **GroupId** (`FName`): ID linking to the associated city edit group. *(Foreign = "CityEdit.Id")*  
- **IsSliderType** (`bool`): Whether this sub-tab uses a slider control for input.  
- **SliderDefaultValue** (`float`): Default value of the slider when initialized.  
- **DefaultMinRate** (`float`): Minimum rate value for the slider.  
- **DefaultMaxRate** (`float`): Maximum rate value for the slider.  
- **bMPCType** (`bool`): If true, this control is mapped to a Material Parameter Collection (MPC).  
- **MPCParamName** (`FName`): Name of the MPC parameter this control modifies.  
- **SliderStepSize** (`int32`): Step size for slider increments.  
- **IsListType** (`bool`): Whether this sub-tab uses a list selection UI instead of a slider.  
- **IsMultiSelectable** (`bool`): If true, the list allows multiple selections.  
- **IsColorPaletteType** (`bool`): If true, the sub-tab shows a color palette selector.  
- **IsUserImportableType** (`bool`): If true, users can import their own resources into this category.  
- **SliderLeftTextId** (`FString`): Localization key for the label on the left of the slider. *(StringTableKey)*  
- **SliderRightTextId** (`FString`): Localization key for the label on the right of the slider. *(StringTableKey)*  
- **BlendStartPos** (`FVector`): Start position for blend transition.  
- **BlendEndPos** (`FVector`): End position for blend transition.  
- **BlendStartRot** (`FRotator`): Start rotation for blend transition.  
- **BlendEndRot** (`FRotator`): End rotation for blend transition.  
- **BlendStartDistance** (`float`): Starting distance value used for blending.  
- **BlendEndDistance** (`float`): Ending distance value used for blending.  
- **BlendTime** (`float`): Duration of the blend effect in seconds.  

## 📚 References

- [CityEdit](../CityEdit.md)