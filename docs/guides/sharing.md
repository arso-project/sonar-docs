---
title: sharing
id: sharing
---

If you know the key of a collection you can add it by using the subscribe mechanism.

This will fetch all records from the first to the last and then waits for new records. Currently only intended for usage in bots (not in short-running Browser clients).

``` js
// Collection: Subscriptions
await collection.subscribe(name, opts, callback)
```