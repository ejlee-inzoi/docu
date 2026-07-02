# entity

Overview
==

- 19 commands in this category.

Commands
==

| Command | Name | Description |
|---|---|---|
| [`entity.attach_prop`](entity.attach_prop.md) | Attach Prop to Character Bone | Spawn an object or vehicle and attach it to a character bone. action=list_sockets [filter=<kw>]: li… |
| [`entity.components`](entity.components.md) | Entity Components | List all component type names attached to an entity. |
| [`entity.concept_info`](entity.concept_info.md) | Concept Character Info | Show concept character info: ConceptId, pool cursor, AppearancePresetId, OutfitPresetId. (BL-56286 … |
| [`entity.find_nearby`](entity.find_nearby.md) | Find Nearby (→ scan_characters) | [deprecated] Use entity.scan_characters instead. |
| [`entity.get_character_info`](entity.get_character_info.md) | Get Character Info | Returns detailed character info including name, gender, growthStep, appearance (hair, skin, garment… |
| [`entity.get_info`](entity.get_info.md) | Get Entity Info (→ get_character_info) | [deprecated] Use entity.get_character_info instead. |
| [`entity.get_object_info`](entity.get_object_info.md) | Get Object Info | Returns detailed info for a game object: data table ID, category, tags, asset path, template, mesh … |
| [`entity.get_possessed`](entity.get_possessed.md) | Get Possessed Entity | Returns the entity_id of the currently possessed character. |
| [`entity.get_simulate_state`](entity.get_simulate_state.md) | Get Simulate State | Check whether a character entity is currently simulated (spawned on-screen). Supports batch query v… |
| [`entity.get_vehicle_info`](entity.get_vehicle_info.md) | Get Vehicle Info | Returns detailed info for a vehicle: type, data table ID, color, driver, display name, template, as… |
| [`entity.possess`](entity.possess.md) | Possess Character | Switches the controlled character to the specified entity. |
| [`entity.reflect`](entity.reflect.md) | Entity Reflect | Serialize entity or component UPROPERTYs via UE reflection. |
| [`entity.scan_characters`](entity.scan_characters.md) | Scan Characters | Scans nearby characters relative to camera/pawn direction. Returns angle, direction label, and dist… |
| [`entity.scan_objects`](entity.scan_objects.md) | Scan Objects | Scans nearby game objects (furniture, doors, fixtures, etc.) relative to camera/pawn direction. |
| [`entity.scan_vehicles`](entity.scan_vehicles.md) | Scan Vehicles | Scans nearby vehicles relative to camera/pawn direction. |
| [`entity.schema`](entity.schema.md) | Entity Schema | Return UPROPERTY schema (name, type, enum values) for an entity or component. |
| [`entity.set_scale`](entity.set_scale.md) | Set Entity Scale | Scale the character: skeletal mesh, capsule (half-height + radius), B2 HalfHeight, and MaxWalkSpeed… |
| [`entity.set_visibility`](entity.set_visibility.md) | Set Character Visibility | Show or hide a character. Default mode toggles mesh visibility only (input/movement/collision remai… |
| [`entity.show_speech_bubble`](entity.show_speech_bubble.md) | Show Speech Bubble | Shows a speech bubble with custom text directly above a character's head. |

