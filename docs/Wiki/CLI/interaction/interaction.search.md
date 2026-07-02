# interaction.search

Overview
==

- Searches InteractionBag data table by keyword. Matches against row ID, category, and tags. Returns interaction_bag_id values usable with interaction.execute.

Metadata
==

| Field | Value |
|---|---|
| Display | Search Interactions |
| Category | `interaction` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keyword | string | yes | — | Search keyword (matches ID, category, tags) |
| max_results | int | no | 30 | Maximum number of results to return |

Usage
==

```js
await inzoi.cli.execute('interaction.search', {
  keyword: '',
  max_results: 30, // optional
});
```