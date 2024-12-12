/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3853224427")

  // update field
  collection.fields.addAt(7, new Field({
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3853224427")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2043940348",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "fund_doc",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
