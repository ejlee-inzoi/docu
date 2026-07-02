## 🎛️ Enum: EB1OrderType

Specifies how an interaction or order is executed.

- **Invalid**: Invalid order.  
- **ONCE**: The order is executed only once. 
- **ESSENTIAL**: The order must be attempted and will continue to retry until it succeeds, as long as the schedule has not ended.  
- **PERSISTENT**: The order is repeatedly executed throughout its designated time period.  
- **RANDOMPERSISTENT**: If the InteractionBag is defined as a pool, a random interaction is selected from the pool each time the order is executed.  
- **ONCEDURING**: Attempts to execute the order once. If it fails, it is abandoned—but it is always attempted at least once.  