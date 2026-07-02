## 🧩 Struct: FB1AnimSection

Defines a named section within an animation sequence, used to manage looping and flow.

### Properties

- **Name** (`FName`): The name of this animation section.  
- **NextSectionName** (`FName`): The name of the next section to transition to after this one.  
- **Time** (`float`): The time position in seconds where this section starts.  
- **IsLoop** (`bool`): Whether the animation should loop back to this section.  
