## 🧩 Struct: FB1RelationshipConditionCompare

Defines a condition range for a relationship stat and the linked relationship result.

### Properties

- **FromValue** (`float`): Minimum value of the stat range.  
- **ToValue** (`float`): Maximum value of the stat range.  
- **Level** (`int8`): Level classification used for evaluation.  
- **LinkRelationshipId** (`FName`): The ID of the resulting relationship state if the condition is met. *(Foreign = "Relationship.Id")*  
- **FocusSelectionData** (`FB1RelationshipFocusSelectionData`): Auto-selection settings for focus(The relationship level changes or The relationship polarity shifts).  

## 📚 References

- [FB1RelationshipFocusSelectionData](./FB1RelationshipFocusSelectionData.md)
- [Relationship](../Relationship.md)