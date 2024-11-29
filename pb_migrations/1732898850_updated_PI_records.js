/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_UoiSbNu0S5` ON `PI_records` (\n  `PI_id`,\n  `aadhar_no`\n)"
    ]
  }, collection)

  return app.save(collection)
})
