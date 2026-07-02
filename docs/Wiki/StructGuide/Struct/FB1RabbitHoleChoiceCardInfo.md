## 🧩 Struct: FB1RabbitHoleChoiceCardInfo

Defines configuration for a random choice card that may appear during a rabbit hole event.

### Properties

- **Id** (`FName`): Identifier for the choice card group.  
- **Ratio** (`float`): Probability (0.0 to 1.0) that the card will appear. *(ClampMin = 0, ClampMax = 1)*  
- **MinTime** (`int32`): Minimum time (in seconds or ticks) the card is active. *(ClampMin = 0)*  
- **MaxTime** (`int32`): Maximum time for the card to be active. *(ClampMin = 0)*  
