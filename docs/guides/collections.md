---
title: collections
id: collections
---

## What is a Collection
An collection is a set of feeds that are shared among peers.
A feed is an append-only log of records. Each feed is only writable from a single device.
A record is a unit of data. Each record has a type, a ref and a value.

When sonar is started a local collection is available by default.

Collections are assigned to a workspace. You can learn how to create a workspace in the workspace guide..


## add or open collection

To add a new collection to the workspace we simply call the ```createCollection()``` function to open it we use ```openCollection()``` as for example in this code snippet:


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

## delete a collection
Currently it is not possible to delete a collection, maybe we will enable this in the future.

## list collections and get further informations


To list the collections in a workspace and get more information about them you can use the following functions:

``` js
await workspace.listCollections
collection.key
collection.info
```

### getters

Various getters are available to retrieve the parameters of the collection:


```js
  get name () {
    if (this._info) return this._info.name
    return this._nameOrKey
  }
  get key () {
    return this._info && this._info.key
  }
  get localKey () {
    return this._info && this._info.localKey
  }
  get info () {
    return this._info
  }
  get id () {
    return this._info && this._info.id
  }
  get length () {
    return this._length || this._info.length || 0
  }
```

## update a collection

To update a collection configuration you can use ```updateCollection(name, info)```

## more about collections

Collections manage our feeds these can have different forms on the one hand you can add simple files to the collections so called `file records` on the other hand you can also manage your databases in a collection with the so called `record scheme`. Furthermore you can share your feeds with others or replicate them, more about this in the corresponding guides.