/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1891682022",
    "maxSelect": 1,
    "name": "agency",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "S&T",
      "R&D"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // remove field
  collection.fields.removeById("select1891682022")

  return app.save(collection)
})
