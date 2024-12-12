/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool1602529173",
    "name": "approval_status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // remove field
  collection.fields.removeById("bool1602529173")

  return app.save(collection)
})
