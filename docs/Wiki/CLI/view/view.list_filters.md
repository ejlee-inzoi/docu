# view.list_filters

Overview
==

- Returns the list of available screen post-process filters (Realistic, Cartoon, TiltedShift, BW2Color, X4Pixels, LensEffectA, Draw, GradientBand, LensEffectB) plus the currently active filter.

Metadata
==

| Field | Value |
|---|---|
| Display | List View Filters |
| Category | `view` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('view.list_filters');
```