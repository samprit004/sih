/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1496325196",
    "max": null,
    "min": null,
    "name": "Project_id",
    "onlyInt": true,
    "presentable": true,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1496325196",
    "max": null,
    "min": null,
    "name": "Project_id",
    "onlyInt": true,
    "presentable": true,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
