/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date1181732776",
    "max": "",
    "min": "",
    "name": "meeting_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // remove field
  collection.fields.removeById("date1181732776")

  return app.save(collection)
})
