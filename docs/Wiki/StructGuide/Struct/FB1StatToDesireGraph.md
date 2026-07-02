## 🧩 Struct: FB1StatToDesireGraph

Defines a mapping from stat values to desire values, including variation by growth stage.

### Properties

- **DesireValue** (`float`): Reference value for each stat level.  
- **Tier** (`EB1StatServiceTier`): Service tier classification this graph belongs to. (e.g., Limited, Full)
- **AgingVariation** (`FB1StatDesireAgingVariationInfo`): Growth step-specific variation weight values for desire evaluation.  

## 📚 References

- [EB1StatServiceTier](../Enum/EB1StatServiceTier.md)
- [FB1StatDesireAgingVariationInfo](./FB1StatDesireAgingVariationInfo.md)