## 🎭 Struct: FB1ScenarioInfo

Defines information used to trigger or configure a scenario within gameplay, including interaction bags and acting styles.

### Properties

- **InteractionBagId** (`FName`): ID reference to a collection of interactions used in the scenario. (Foreign: `InteractionBag.Id`)
- **ActingType** (`EB1ActingType`): Type of acting or behavior to apply for the scenario.
- **ForceCurrentInteractionCancel** (`bool`): Whether to cancel the currently running interaction when this scenario starts.

## 📚 References

- [InteractionBag](../InteractionBag.md)