/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{36}",
    "hidden": false,
    "id": "text3695768478",
    "max": 36,
    "min": 36,
    "name": "Auth_token",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1831142704",
    "max": "",
    "min": "2024-11-28 12:00:00.000Z",
    "name": "Auth_exp",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{36}",
    "hidden": false,
    "id": "text3695768478",
    "max": 36,
    "min": 36,
    "name": "Auth_token",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1831142704",
    "max": "",
    "min": "",
    "name": "Auth_exp",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text826006091",
    "max": 6,
    "min": 6,
    "name": "OTP",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
