# 📘 FamilyCreateTemplate Data Guide

## 🧩 Struct: FB1FamilyCreateTemplateTableRow

Defines a template for family creation, including member count and operations.

### Properties

- **Id** (`FName`): Unique identifier for the template.  
- **Ratio** (`int32`): Probability weight used in selection.  
- **FamilyMemberCount** (`int32`): Number of members to generate.  
- **FamilyCreateOperations** (`TArray<FB1FamilyCreateOperation>`): Instructions for generating individual members.  


@include Data/StrcutGuide/Struct/FB1FamilyCreateOperation.md
@include Data/StrcutGuide/Enum/EB1FamilyRelationshipType.md
@include Data/StrcutGuide/Enum/EB1FamilyCreateGenderControllType.md