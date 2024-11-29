/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": "@request.body.CMPDI_id.user_type=\"PI\" &&\n@request.body.CMPDI_id.verify_status=\"PI docs pending\"",
    "updateRule": "@request.body.CMPDI_id.user_type=\"PI\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": "@request.body.CMPDI_id.user_type=\"PI\" &&\n@request.body.CMPDI_id.verify_status=\"Verification pending\"",
    "updateRule": "CMPDI_id.user_type=\"PI\""
  }, collection)

  return app.save(collection)
})
