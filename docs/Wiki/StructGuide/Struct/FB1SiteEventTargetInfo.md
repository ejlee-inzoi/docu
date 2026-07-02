## 🎯 Struct: FB1SiteEventTargetInfo

Defines the configuration of a target role involved in a site event, including its type, behavior, and post-action handling.

### Properties

- **RoleId** (`FName`): Identifier for the role assigned to this site event target.
- **TargetType** (`EB1SiteEventTargetType`): Type of the target, defining how it participates in the event.
- **TargetRoleOption** (`EB1SiteEventTargetRoleOption`): Options for selecting the role of the target.
- **ActionPlayCount** (`int32`): Number of times the assigned action should be played.
- **FinishOption** (`EB1SocialEventActionFinishOption`): Determines what happens after the action completes.

## 📚 References

- [EB1SiteEventTargetType](../Enum/EB1SiteEventTargetType.md)
- [EB1SiteEventTargetRoleOption](../Enum/EB1SiteEventTargetRoleOption.md)
- [EB1SocialEventActionFinishOption](../Enum/EB1SocialEventActionFinishOption.md)
