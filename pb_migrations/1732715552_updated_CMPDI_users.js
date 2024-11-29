/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{8}",
    "hidden": false,
    "id": "text901924565",
    "max": 12,
    "min": 6,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // remove field
  collection.fields.removeById("text901924565")

  return app.save(collection)
})
