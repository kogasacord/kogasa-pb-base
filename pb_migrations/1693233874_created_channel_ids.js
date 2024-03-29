/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7noywclwie1h8b0",
    "created": "2023-08-28 14:44:34.508Z",
    "updated": "2023-08-28 14:44:34.508Z",
    "name": "channel_ids",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3g08k8mx",
        "name": "channel_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7noywclwie1h8b0");

  return dao.deleteCollection(collection);
})
