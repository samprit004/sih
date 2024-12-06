/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number826006091",
    "max": null,
    "min": null,
    "name": "OTP",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date3937585977",
    "max": "",
    "min": "",
    "name": "OTP_exp",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // remove field
  collection.fields.removeById("number826006091")

  // remove field
  collection.fields.removeById("date3937585977")

  return app.save(collection)
})
