/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_hJdNTHqIhG` ON `gov_list` (\n  `aadhar`,\n  `PI_id`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2148041500")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
