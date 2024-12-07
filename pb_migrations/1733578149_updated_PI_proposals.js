/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3063876843")

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
})
