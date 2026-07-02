## 🧩 Struct: FB1RelationshipCondition

Defines conditions based on a specific relationship stat and its comparison ranges.

### Properties

- **RelationshipStatId** (`FName`): ID of the relationship stat this condition applies to. *(Foreign = "RelationshipStat.Id")*  
- **CompareList** (`TArray<FB1RelationshipConditionCompare>`): List of comparison blocks for evaluating stat ranges.  

## 📚 References

- [FB1RelationshipConditionCompare](./FB1RelationshipConditionCompare.md)
- [RelationshipStat](../RelationshipStat.md)