/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2386179695",
    "max": "",
    "min": "",
    "name": "meetingTimeSlot",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1048251387",
    "max": 0,
    "min": 0,
    "name": "response",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool828589335",
    "name": "proposalStatus",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // remove field
  collection.fields.removeById("date2386179695")

  // remove field
  collection.fields.removeById("text1048251387")

  // remove field
  collection.fields.removeById("bool828589335")

  return app.save(collection)
})
