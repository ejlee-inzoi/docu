## 🧩 Struct: FB1ObjectBPComponentData

Defines metadata for a Blueprint component in an object, including attachment and configuration properties.

### Properties

- **ComponentName** (`FName`): Unique name for the component within the blueprint.  
- **ComponentClassName** (`FName`): Name of the component class (e.g., StaticMeshComponent, AudioComponent).  
- **AttachParentName** (`FName`): Name of the parent component to which this one is attached.  
- **AttachSocketName** (`FName`): Name of the socket or bone used for attachment.  
- **PropertyMetaDatas** (`TMap<FName, FString>`): Map of additional property metadata for the component (e.g., visibility, transform, color).  
