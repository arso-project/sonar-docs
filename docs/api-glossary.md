---
title: Glossary
id: api-glossary
---

## Terms used in Sonar

A **Island** is a set of **feeds** that are shared among **peers**.

A **feed** is an append-only log of **records**. Each feed is only writable from a single device.

A **record** is a unit of data. Each record has a **type**, a **ref** and a **value**. After being saved, it also has a **key** and **seq**, identifying its storage location (feed and sequence number). It also has an **lseq**, which is this record's sequence number in the local space log.
> A record is versioned. The adress of a specific version of a record is `sonar://:island/feed/:key@:seq`. The current version of a record is `sonar://:island/record/:ref/:type`. The unique latest version of a record in a feed is `sonar://:island/record/:ref/:type@:key`
> A record within a single feed is identified by `ref/type`. Within an island, there can be multiple records of the same `ref/type` in case of conflicts.
> A record within an island has a **path** that is `ref/type`.`

A set of records with the same **ref** is called an **entity**.

> The set of records that make up an entity is addressed as `sonar://record/:ref

A **type** is a specification of how the value of a records is to be interpreted. A type is defined by a **schema record**. The schema record defines how to validate records of this type, and how this record is indexed.

An **file record** is a record that describes a file stored in a island and has **type:** 'file'.
