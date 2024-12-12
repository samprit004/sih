/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number357956263",
    "max": null,
    "min": null,
    "name": "fund_requested",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number2305337900",
    "max": null,
    "min": null,
    "name": "current_amount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number3916963715",
    "max": null,
    "min": null,
    "name": "fund_amount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // remove field
  collection.fields.removeById("number357956263")

  // remove field
  collection.fields.removeById("number2305337900")

  // remove field
  collection.fields.removeById("number3916963715")

  return app.save(collection)
})
