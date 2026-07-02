## 🧩 Struct: FB1StatDesireInfo

Defines how much desire is generated based on the current stat value. This value is used to determine the next action during autonomous behavior.

### Properties

- **PriorityLevel** (`int32`): Defines the range used to evaluate the current stat value (higher = more urgent).  
- **PriorityValue** (`float`): Specifies the desire score used in autonomous behavior when the stat value nears this range.  
- **StatDesireGraph** (`TArray<FB1StatToDesireGraph>`): Data structured to adjust the fulfillment level of stat-based needs depending on age.

## 📚 References

- [FB1StatToDesireGraph](./FB1StatToDesireGraph.md)