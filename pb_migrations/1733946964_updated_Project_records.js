/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3853224427",
    "hidden": false,
    "id": "relation376250268",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "project_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // remove field
  collection.fields.removeById("relation376250268")

  // remove field
  collection.fields.removeById("relation4100109983")

  return app.save(collection)
})
