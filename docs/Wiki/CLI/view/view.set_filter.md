# view.set_filter

Overview
==

- Apply a screen post-process filter. Accepts enum ids (Realistic, Cartoon, BW2Color, X4Pixels, TiltedShift, LensEffectA, Draw, GradientBand, LensEffectB) or natural-language aliases (bw, monochrome, cartoon, pixel, sketch, dreamy, horror, cinematic, miniature, etc). Works without entering Photo Mode.

Metadata
==

| Field | Value |
|---|---|
| Display | Set View Filter |
| Category | `view` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | string | yes | — | Filter id or alias (e.g. BW2Color, bw, cartoon, pixel, sketch, dreamy, horror) |

Usage
==

```js
await inzoi.cli.execute('view.set_filter', {
  value: '',
});
```