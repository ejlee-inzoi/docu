## 🧩 Struct: FB1ChoiceCard

Represents a weighted choice card entry used in gameplay decision or reward systems.

### Properties

- **ChoiceCardId** (`FName`): Identifier for the choice card (linked to `ChoiceCard.Id`).  
- **Ratio** (`int32`): Selection weight or ratio for this card entry. Must be greater than or equal to 0. *(ClampMin = 0)*  

## 📚 References

- [ChoiceCard](../ChoiceCard.md)