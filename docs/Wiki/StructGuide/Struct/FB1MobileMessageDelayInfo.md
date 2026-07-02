## 🧩 Struct: FB1MobileMessageDelayInfo

Defines delay timing and probability rules for when a mobile message is delivered.

### Properties

- **DelayProbability** (`float`): Probability the message is delayed; 0.0 = always delayed, 1.0 = not delayed.  
- **IsWeekday** (`bool`): If true, delay applies only on weekdays.  
- **IsWeekend** (`bool`): If true, delay applies only on weekends.  
- **DayOfWeek** (`EB1DayOfWeek`): Specifies a particular day (e.g., Monday) to send the message. This is only used if both IsWeekday and IsWeekend are false.  
- **DelayDate** (`int32`): Used when a specific number of days should be delayed before sending. Only used if both IsWeekday and IsWeekend are false and DayOfWeek is Invalid.
- **StartTime** (`int32`): The earliest time when the message can be sent.
- **AddOffsetTime** (`int32`): Extra random offset added to the delivery time.  
- **EndTime** (`int32`): The latest timewhen the message can be sent..  

## 📚 References

- [EB1DayOfWeek](../Enum/EB1DayOfWeek.md)