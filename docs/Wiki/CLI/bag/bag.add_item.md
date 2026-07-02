# bag.add_item

Overview
==

- Adds stacked items to the bag by object data table ID.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Item To Bag |
| Category | `bag` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AddItemToBag`, `household.add_item` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| object_id | name | yes | — | Object data table ID |
| count | int | yes | — | Number of items |

Usage
==

```js
await inzoi.cli.execute('bag.add_item', {
  object_id: '',
  count: 0,
});
```