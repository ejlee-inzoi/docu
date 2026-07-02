## 🧩 Struct: FB1HowlingEffect

Encapsulates a complete howling effect, including weight evaluation, interaction, and script execution.

### Properties

- **WeightInfo** (`FB1HowlingWeightInfo`): Weighting rules that determine how likely this howling effect is to occur.  
- **bCancelCurrentInteraction** (`bool`): If true, the current interaction will be canceled before the effect is applied.  
- **InteractionEffect** (`FB1HowlingEffect_Interaction`): InteractionBag triggered by the howling.  
- **ScriptEffect** (`FB1HowlingEffect_Script`): Script effect triggered during the howling.  

## 📚 References

- [FB1HowlingWeightInfo](./FB1HowlingWeightInfo.md)
- [FB1HowlingEffect_Interaction](./FB1HowlingEffect_Interaction.md)
- [FB1HowlingEffect_Script](./FB1HowlingEffect_Script.md)