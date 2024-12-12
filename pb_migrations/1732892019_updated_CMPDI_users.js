/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2903577919",
    "maxSelect": 1,
    "name": "verify_status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Verified",
      "Verification pending",
      "PI docs pending",
      "OTP pending"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2667000955")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2903577919",
    "maxSelect": 1,
    "name": "verify_status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Verified",
      "Verification pending",
      "PI docs pending"
    ]
  }))

  return app.save(collection)
})
