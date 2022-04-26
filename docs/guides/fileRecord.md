---
title: file records
id: fileRecord
---

To manage files in collections and their feeds there is a predefined scheme and some helper methods which allow us to access or create them in an easy way. 

``` js
await collection.fs.readFile(refOrPath)
await collection.fs.createFile(refOrPath)
await collection.fs.updateFile(refOrPath)
await collection.fs.getFileMetadata(refOrPath)
```

Currently it is not possible to delete a records for real. When a record is deleted, it receives a tombstone to show other peers that it is no longer available.