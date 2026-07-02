## 🧩 Struct: FB1FxSlotData

Defines visual FX configuration for a slot, supporting Niagara and Particle types.

### Properties

- **FXType** (`EB1SloFXEffectType`): Type of FX used (e.g., Niagara, Particle).  
- **NiagaraFXObject** (`TSubclassOf<UB1FXNiagaraObject>`): Niagara FX object class (used if FXType is Niagara).  
- **NiagaraSystem** (`TSoftObjectPtr<UNiagaraSystem>`): Niagara system asset (used if FXType is Niagara).  
- **ParticleSystem** (`TSoftObjectPtr<UParticleSystem>`): Legacy particle system asset (used if FXType is Particle).  
- **CullDistance** (`float`): Maximum distance at which the FX is visible. Default is 3000 units.  

## 📚 References

- [EB1SloFXEffectType](../Enum/EB1SloFXEffectType.md)