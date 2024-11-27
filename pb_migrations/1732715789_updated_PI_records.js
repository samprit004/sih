/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": "CMPDI_id.user_type = \"PI\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": null
  }, collection)

  return app.save(collection)
})
