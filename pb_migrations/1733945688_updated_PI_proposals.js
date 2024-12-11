/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3853224427",
    "hidden": false,
    "id": "relation800313582",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "project",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // remove field
  collection.fields.removeById("relation800313582")

  return app.save(collection)
})
