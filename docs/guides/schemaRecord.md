---
title: schema records
id: schemaRecord
---
Since we understand sonar as a p2p database you can freely define a schema in which you can store your information.
the schema has at least one fixed parameters  ``` js  type: string \\One of the Sonar field types  ```

A typical scheme looks like this and more can be found at https://sonar.dev.arso.xyz/docs/api-schema:

``` JSON
const spec = {
  title: 'Notes',
  fields: {
    title: {
      type: 'string',
      title: 'Title',
      index: {
        search: { title: true }
      }
    },
    body: {
      type: 'text'
      title: 'Body',
      index: {
        // This could also be the default by field type
        search: { bodytext: true }
      }
    },
    date: {
      type: 'date',
      title: 'Date',
      index: {
        basic: true,
        search: { facet: true }
      }
    },
    tags: {
      type: 'string',
      multiple: true,
      title: 'Tags',
      index: {
        basic: true,
        search: { facet: true }
      }
    },
    author: {
      type: 'relation',
      title: 'Author'
    }

  }
}
```

## add new schema

To add a new schema to a collection you need the function:

``` js
await collection.putType(schema)
```