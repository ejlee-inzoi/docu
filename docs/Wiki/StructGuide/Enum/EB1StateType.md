## 👻 Enum: EB1StateType

Bitflag enum representing different entity states such as Alive or Ghost.  
Supports combining flags for multi-state configurations.

- **Alive** (`1 << 0`): The entity is in a living/active state.
- **Ghost** (`1 << 1`): The entity is in a ghost/non-corporeal state.
- **Both** (`Alive | Ghost`): Represents both Alive and Ghost states simultaneously.
