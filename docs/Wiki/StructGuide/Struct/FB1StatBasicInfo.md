## 🧩 Struct: FB1StatBasicInfo

Defines the initial setup and constraints for a stat, including value range and type.

### Properties

- **StatType** (`EB1StatType`): Classification type for the stat (e.g., Motive, Object).  
- **IsDesire** (`bool`): If true, it represents a fundamental need. (e.g., sleep, hunger).  
- **StateType** (`EB1StateType`): It is a type defined using bit flags to represent the states Alive, Ghost, or both simultaneously.
- **MinValue** (`float`): Minimum value the stat can reach.  
- **MaxValue** (`float`): Maximum value the stat can reach.  
- **InitialValue** (`float`): Starting value when the stat is initialized.  

## 📚 References

- [EB1StatType](../Enum/EB1StatType.md)
- [EB1StateType](../Enum/EB1StateType.md)