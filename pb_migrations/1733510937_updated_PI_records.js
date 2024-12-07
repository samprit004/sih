/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2148041500",
    "hidden": false,
    "id": "relation256245529",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // remove field
  collection.fields.removeById("relation256245529")

  return app.save(collection)
})
