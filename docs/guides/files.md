---
title: Files
id: files
---

Each Sonar collection has a file store with a simple-to-use API to read and write file assets.

To use the files API, open a Sonar collection as usual.
```js
import { Workspace } from '@arsonar/client'
const workspace = new Workspace()
const collection = await workspace.openCollection('default')
```

The file API has methods to read and write files.

```js
const content = 'foo' // can also be a Uint8Array or a ReadableStream
const file = await collection.files.createFile(content)
// file is a Sonar record of type 'sonar/file'
console.log(file.id) // this logs the File ID
const loadedContent = await collection.files.readFile(file.id, { responseType: 'text' })
console.log(loadedContent) // logs "foo"
await collection.files.updateFile(file.id, "bar")
// now the file content is updated.
const url = collection.files.getURL(file.id)
// url now is a HTTP url to the file content.
```

See the <a href="/apidocs-client/classes/Files.html" target="_blank">API docs</a> for the supported parameters and additional methods.

