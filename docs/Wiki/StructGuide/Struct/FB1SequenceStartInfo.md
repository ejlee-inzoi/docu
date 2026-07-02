## 🎬 Struct: FB1SequenceStartInfo

Defines the entry condition and label used to begin a sequence, typically in interaction or story flow systems.

### Properties

- **ConditionId** (`FName`): ID reference to the interaction condition required to start the sequence. (Foreign: `InteractionCondition.Id`)
- **StartLabel** (`FName`): Label name used to indicate the starting point of the sequence.

## 📚 References

- [InteractionCondition](../InteractionCondition.md)