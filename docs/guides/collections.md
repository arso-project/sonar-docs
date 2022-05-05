---
title: Collections
id: collections
---

## What is a Collection
An collection is a set of feeds that are shared among peers.
A feed is an append-only log of records. Each feed is only writable from a single device.
A record is a unit of data. Each record has a type, a ref and a value.

Collections are always part of a Workspace.


## Add or open collection

To add a new collection to the workspace we simply call the ``createCollection()``` function to open it we use ``openCollection()``` as for example in this code snippet:


```js
/**
 * Check if the collection already exists if not create a new collection
 * @returns opened || new collection
 */
export async function Collection(): Promise<Collection> {
  if (!collection) {
    try {
      collection = await workspace.openCollection(collectionName)
    } catch (err: any) {
      collection = await workspace.createCollection(collectionName)
    }
    //  console.log('opened collection', collection.key.toString('hex'))
    await ensureSchema(collection, schema)
  }
  return collection
}
```

## Collection prooperties

Various getters are available to retrieve the parameters of the collection:

* `collection.key` is the hex-encoded *primary key* of the collection. Sharing this key gives *read access* to the collection.

* `collection.info` contains a list of the feeds and other status information.

* `collection.length` is the number of records in this collection.

## Database

Each collection forms a database of `Record`s. A record is a mutable, versioned record of data. Each record has a type, a unique ID and a JSON value. Through its type, a record is associated with a type schema.

Records are created through `collection.put()` and read through `collection.get()` and `collection.query()`.

See the <a href="/apidocs-client/classes/Collection.html" target="_blank">API docs</a> for the supported parameters and additional methods.
