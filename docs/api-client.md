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
const island = await client.createIsland(name, opts)
const island = await client.island(keyOrName)
await client.listIslands)

island.key
island.info

// Island: Database
await island.put()
await island.get()
await island.del()
await island.query(name, args, opts)
// Island: Subscriptions
await island.subscribe(name, opts, callback)
// Island: Schemas
await island.putSchema()
await island.delSchema()
// Island: Feeds
await island.addFeed()
await island.delFeed()
await island.listFeeds()

// FS
await island.fs.readFile(refOrPath)
await island.fs.writeFile(refOrPath)
await island.fs.createReadStream(refOrPath)
await island.fs.createWriteStream(refOrPath)
await island.fs.stat(refOrPath)
await island.fs.resolveURL(refOrPath)


// Schema
island.schema.fields(record)
island.schema.validate(record)
island.schema.map(record, targetSchema)
island.schema.list()
island.schema.get()
```
