/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // update collection data
  unmarshal({
    "name": "Project_records"
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // update collection data
  unmarshal({
    "name": "Project_docs"
  }, collection)

  // remove field
  collection.fields.removeById("date2862495610")

  return app.save(collection)
})
