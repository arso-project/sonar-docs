---
id: schema
title: Data model and Schema
---

## Data model

This document outlines the Sonar data model.

The basic unit of information in Sonar is a *Record*. A *Record* has the following required fields:

* `ref`: A string that identifies the entity that this record describes.
* `type`: A string identifying the type of this record
* `value`: The value object

After being inserted into the database, a record will have these additional fields upon loading:

* `version`: The `key@seq` string that uniquely identifies this record version
* `lseq`: The local sequence number of this record
* `links`: List of `key@seq` links that this record makes obsolete
* `timestamp` Timestamp when this record was saved


## Working with schema

The schema store is available on `client.schema`. It is an object exposing functions.

> Question: The client first has to load all schema info from the server. Where should the async step happen?

* `schema.fields(record)`: Get an array of `{ name, field, value }` objects, where `field` is a field object

* `schema.map(record, targetSchema)`: Map a record onto a target schema. Returns an array of fields


## Defining schema

A schema is an object describing the fields this content type has. It supports the basic JSON types (`string`, `boolean`, `number`, `object`) plus the following additional types:

* `text`
* `reference`
* `date`

A simple schema definition looks like this:

```javascript
const schema = {
  title: 'Notes',
  fields: {
    title: {
      type: 'string',
      title: 'Title',
      index: {
        search: {
          target: 'fulltext',
          boost: 3
        }
      }
    },
    body: {
      type: 'text'
      title: 'Body',
      index: {
        // This could also be the default by field type
        search: 'fulltext'
      }
    },
    date: {
      type: 'date',
      title: 'Date',
      index: {
        basic: true,
        search: 'field'
      }
    },
    tags: {
      type: 'string',
      multiple: true,
      title: 'Tags',
      index: {
        basic: true,
        search: 'facet'
      }
    },
    author: {
      type: 'relation',
      title: 'Author'
    }

  }
}
```

The `index` property of each field controls how content is indexed into the secondary indexes that are mounted on the island.
