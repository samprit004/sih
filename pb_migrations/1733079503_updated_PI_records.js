/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // remove field
  collection.fields.removeById("number2167223107")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2167223107",
    "max": 20,
    "min": 0,
    "name": "PI_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2167223107",
    "max": 9999999999,
    "min": null,
    "name": "PI_id",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text2167223107")

  return app.save(collection)
})
