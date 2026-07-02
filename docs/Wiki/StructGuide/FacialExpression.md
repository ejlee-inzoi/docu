# 📘 FacialExpression Data Guide

## 🧩 Struct: FB1FacialExpressionTableRow

Defines a facial expression with animation sequences and blending behavior.

### Properties

- **Id** (`FName`): Unique identifier for this facial expression.  
- **AnimInfoList** (`TArray<FB1AnimSequenceInfo>`): Animations for each gender and age group.  
- **BlendAlpha** (`float`): Blend weight when this expression is applied.  


## 📚 References

- [FB1AnimSequenceInfo](./Struct/FB1AnimSequenceInfo.md)
- [EB1GenderType](./Enum/EB1GenderType.md)
- [EB1BodyAgeType](./Enum/EB1BodyAgeType.md)