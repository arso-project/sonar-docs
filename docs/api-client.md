---
id: api-client
title: Client
---
## Intro

The primary way to interact with Sonar is through the *Sonar Client*. The Client talks to the Sonar daemon over HTTP. The Sonar daemon is part of the P2P network, exchanges data with other peers and indexes the data in your islands.

## Get started

The client works both in browsers and in NodeJS. When using in browser, you currently need to have a bundling setup that supports CommonJS (e.g. webpack or browserify).

Add the client to your project:
```
npm install @arso-project/sonar-client
```

Then, you can import the client and start using it.

```javascript
const Client = require('@arso-project/sonar-client')
const client = new Client(opts)
```

### API

**The current API is documented in the [README of sonar-client](https://github.com/arso-project/sonar/blob/master/sonar-client/README.md)**

*This is a draft page for the revised client API. It is not yet complete*.

```javascript
const collection = await client.createIsland(name, opts)
const collection = await client.collection(keyOrName)
await client.listIslands)

collection.key
collection.info

// Island: Database
await collection.put()
await collection.get()
await collection.del()
await collection.query(name, args, opts)
// Island: Subscriptions
await collection.subscribe(name, opts, callback)
// Island: Schemas
await collection.putSchema()
await collection.delSchema()
// Island: Feeds
await collection.addFeed()
await collection.delFeed()
await collection.listFeeds()

// FS
await collection.fs.readFile(refOrPath)
await collection.fs.writeFile(refOrPath)
await collection.fs.createReadStream(refOrPath)
await collection.fs.createWriteStream(refOrPath)
await collection.fs.stat(refOrPath)
await collection.fs.resolveURL(refOrPath)


// Schema
collection.schema.fields(record)
collection.schema.validate(record)
collection.schema.map(record, targetSchema)
collection.schema.list()
collection.schema.get()
```
