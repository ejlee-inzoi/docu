## 🧩 Struct: FB1TraitRelationship

Defines a compatibility relationship between two traits.

### Properties

- **Id** (`FName`): Unique identifier for this trait relationship entry.  
- **ListKey** (`FString`): Internal reference key.  
- **TraitA** (`FName`): First trait in the relationship. *(Foreign = "Trait.Id")*  
- **TraitB** (`FName`): Second trait in the relationship. *(Foreign = "Trait.Id")*  
- **PositiveLevel** (`int32`): The value assigned when TraitA and TraitB are paired.  

## 📚 References

- [Trait](../Trait.md)
