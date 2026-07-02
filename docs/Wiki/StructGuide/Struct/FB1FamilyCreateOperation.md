## 🧩 Struct: FB1FamilyCreateOperation

Defines a rule used when generating family members during character creation.

### Properties

- **RelationshipTargetId** (`FName`): The target character ID this family member is linked to.  
- **RelationshipType** (`EB1FamilyRelationshipType`): Type of familial relationship (e.g., Parent, Sibling).  
- **GenderControllType** (`EB1FamilyCreateGenderControllType`): Rule controlling the gender outcome.  
- **ToRelationshipTargetIdList** (`TArray<FName>`): List of other related target IDs this operation affects.  

## 📚 References

- [EB1FamilyRelationshipType](../Enum/EB1FamilyRelationshipType.md)
- [EB1FamilyCreateGenderControllType](../Enum/EB1FamilyCreateGenderControllType.md)