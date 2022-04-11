---
title: file record
id: fileRecord
---

To manage files in collections and their feeds there is a predefined scheme and some helper methods which allow us to access or create them in an easy way. 

``` js
await collection.fs.readFile(refOrPath)
await collection.fs.writeFile(refOrPath)
await collection.fs.createReadStream(refOrPath)
await collection.fs.createWriteStream(refOrPath)
await collection.fs.statFile(refOrPath)
await collection.fs.resolveURL(refOrPath)
```

Currently it is not possible to delete a records for real. When a record is deleted, it receives a tombstone to show other peers that it is no longer available.