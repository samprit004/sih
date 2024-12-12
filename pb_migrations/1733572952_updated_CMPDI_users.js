/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "[0-9]{6}",
    "hidden": false,
    "id": "text826006091",
    "max": 6,
    "min": 6,
    "name": "OTP",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "[A-Z0-9]{6}",
    "hidden": false,
    "id": "text826006091",
    "max": 6,
    "min": 6,
    "name": "OTP",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
