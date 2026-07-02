## 🧭 Enum: EB1GrowthStep

Represents the character's stage of life, used throughout systems such as aging, traits, scheduling, and interactions. Bitflags are used for combined or range-based conditions.

### Values

- **Infant**: Represents the infant stage.
- **Toddler**: Represents the toddler stage.
- **Child**: Represents a young child.
- **LowTeen**: Represents a pre-teen or lower teenage stage.
- **HighTeen**: Represents an older teenager.
- **Youth**: Represents early adulthood or youth stage.
- **Adult**: Represents a standard adult.
- **Old**: Represents an aging adult.
- **Elderly**: Represents the final aging stage.

### Combined Bitflag Groups

- **Baby**: Includes both Infant and Toddler.
- **OverOld**: Includes Old and Elderly.
- **OverAdult**: Includes Adult, Old, and Elderly.
- **OverYouth**: Includes Youth and all older stages (Adult, Old, Elderly).
- **OverHighTeen**: Includes HighTeen and all stages included in OverYouth.
- **OverLowTeen**: Includes LowTeen, HighTeen, and OverYouth.
- **OverChild**: Includes Child and OverLowTeen.
- **All**: Includes Infant, Toddler, and OverChild.