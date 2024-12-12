/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file2043940348",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "application/pdf"
    ],
    "name": "fund_doc",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "fund_alloc_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_661617745")

  // remove field
  collection.fields.removeById("file2043940348")

  // update field
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
})
