/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": "CMPDI_id.user_type=\"PI\" &&\nCMPDI_id.verify_status=\"Verification pending\"",
    "updateRule": "CMPDI_id.user_type=\"PI\"",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update collection data
  unmarshal({
    "createRule": "CMPDI_id.user_type = \"PI\"",
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
