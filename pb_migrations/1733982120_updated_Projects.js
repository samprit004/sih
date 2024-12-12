/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3853224427")

  // remove field
  collection.fields.removeById("bool1602529173")

  // remove field
  collection.fields.removeById("date753778219")

  // remove field
  collection.fields.removeById("file2043940348")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3853224427")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "bool1602529173",
    "name": "approval_status",
    "presentable": true,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date753778219",
    "max": "",
    "min": "",
    "name": "fund_alloc_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
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

  // remove field
  collection.fields.removeById("text1843675174")

  return app.save(collection)
})
