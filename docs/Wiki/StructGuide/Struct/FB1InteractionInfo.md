## 🤝 Struct: FB1InteractionInfo

Structure that defines interaction information within a sequence.  
Includes interaction identifiers, labels, and success/failure transitions.

### Properties

- **InteractionId** (`FName`): ID of the interaction. References an entry in `DT_Interaction`. (Foreign: `Interaction.Id`)
- **Label** (`FName`): Label used to identify this interaction within the sequence.
- **SuccessNextLabel** (`FName`): Label of the next interaction to transition to upon success.
- **FailNextLabel** (`FName`): Label of the next interaction to transition to upon failure.
- **bIsOptional** (`bool`): Determines if this interaction is optional.

## 📚 References

- [Interaction](../Interaction.md)