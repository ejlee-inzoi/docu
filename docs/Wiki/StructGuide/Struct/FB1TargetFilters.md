## 🧩 Struct: FB1TargetFilters

Defines a collection of filters and conditions used to evaluate potential interaction targets.

### Properties

- **FilterCircle** (`FB1Filter_AreaCircle`): Filters targets within a circular area.  
- **FilterCylinder** (`FB1Filter_AreaCylinder`): Filters targets within a cylindrical volume.  
- **FilterBox** (`FB1Filter_AreaBox`): Filters targets within a box-shaped volume.  
- **FilterLineTrace** (`FB1Filter_LineTrace`): Line trace filter used to find targets along a ray.  
- **FilterObjectTag** (`FB1Filter_ObjectTag`): Filters based on object tag.  
- **FilterFacing** (`FB1Filter_Facing`): Filters entities based on their position within a fan-shaped area, determined by distance and angle from a reference direction (e.g., facing direction).  
- **Prob** (`float`): Probability that this filter group is applied (0.0 to 1.0).  
- **Conditions** (`TArray<FB1Condition>`): List of conditions that must be satisfied for this filter to apply.  

## 📚 References

- [FB1Filter_AreaCircle](./FB1Filter_AreaCircle.md)
- [FB1Filter_AreaCylinder](./FB1Filter_AreaCylinder.md)
- [FB1Filter_AreaBox](./FB1Filter_AreaBox.md)
- [FB1Filter_LineTrace](./FB1Filter_LineTrace.md)
- [FB1Filter_ObjectTag](./FB1Filter_ObjectTag.md)
- [FB1Filter_Facing](./FB1Filter_Facing.md)
- [FB1Condition](./FB1Condition.md)
