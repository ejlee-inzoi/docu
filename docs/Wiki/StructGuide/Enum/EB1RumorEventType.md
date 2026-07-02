## 🎛️ Enum: EB1RumorEventType

Defines the types of rumor events that can occur within the simulation.

- **Invalid**: No rumor or undefined event.  
- **Positive**: Sends a custom message when the number of positive reactions per rumor meets the specified condition.  
- **Negative**: Sends a custom message when the number of negative reactions per rumor meets the specified condition.  
- **Expire**: Sends a custom message when the duration of a rumor parameter registered in the rumor manager expires.  
- **Custom**: Handles cases where a RumorEvent is triggered via script.