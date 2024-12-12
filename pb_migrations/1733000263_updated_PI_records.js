/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_7yOxR2Ebhc` ON `PI_records` (`CMPDI_id`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
