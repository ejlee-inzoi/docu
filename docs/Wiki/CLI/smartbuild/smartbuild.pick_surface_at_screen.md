# smartbuild.pick_surface_at_screen

Overview
==

- Ray-cast from a screen pixel and return what is under it. Drills through trees/foliage/blocking volumes using manual multi-step tracing on Visibility then GameObject channels. Target priority (first match wins): character > game object > wall/floor/ceiling. Used by drag-and-drop and other tools that need a surface or clothed body part under a cursor. Returns JSON with target="character"|"object"|"wall"|"floor"|"ceiling"|"none" and per-target fields: character={entity_id,bone,garment_type}, object={entity_id,part_index}, wall={floor_level,edge_key,side}, floor/ceiling={floor_level,room_index,is_ceil}. garment_type is auto-resolved from the hit bone and the character's equipped outfit (outer-first: hat>scarf, gloves>top, shoes>socks, etc.). On miss, reason is set and debug fields (hit_actor/hit_component/channel/step) are included. If x/y are omitted, the current mouse viewport position is used. Works in both play mode and build mode.

Metadata
==

| Field | Value |
|---|---|
| Display | Pick Surface At Screen |
| Category | `smartbuild` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| x | float | no | — | Screen X pixel (viewport-local). If omitted, the current mouse position is used. |
| y | float | no | — | Screen Y pixel (viewport-local). If omitted, the current mouse position is used. |

Usage
==

```js
await inzoi.cli.execute('smartbuild.pick_surface_at_screen', {
  x: 0.0, // optional
  y: 0.0, // optional
});
```