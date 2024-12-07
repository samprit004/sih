/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // remove field
  collection.fields.removeById("relation4100109983")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1541934496",
    "hidden": false,
    "id": "relation4100109983",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "PI",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
