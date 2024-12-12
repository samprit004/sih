/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // remove field
  collection.fields.removeById("text920837796")

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text920837796",
    "max": 0,
    "min": 0,
    "name": "agent_analysis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date2386179695",
    "max": "",
    "min": "",
    "name": "meetingTimeSlot",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
