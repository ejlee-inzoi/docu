## 🎛️ Enum: EB1ModifierOperationType

Defines how a modifier applies its value to a base stat or condition.

- **None**: No operation.  
- **Add**: Add the modifier's value.  
- **Multiply**: Multiply the base by the modifier.  
- **SetMax**: Ignores additive and multiplicative modifiers and forcibly overrides the value with a specified non-zero input. This operation takes the highest precedence in the evaluation order..  
- **PositiveAdd**: Add only if value is positive.  
- **NegativeAdd**: Add only if value is negative.  
- **PositiveMultiply**: Multiply only if value is positive.  
- **NegativeMultiply**: Multiply only if value is negative.  