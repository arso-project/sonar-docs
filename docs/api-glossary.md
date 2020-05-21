---
title: Glossary
id: api-glossary
---

## Terms used in Sonar

A **Island** is a set of **feeds** that are shared among **peers**.

A **feed** is an append-only log of **records**. Each feed is only writable from a single device.

A **record** is a unit of data. Each record has a **type**, a **ref** and a **value**. After being saved, it also has a **key** and **seq**, identifying its storage location (feed and sequence number). It also has an **lseq**, which is this record's sequence number in the local space log.

A set of records with the same **ref** is called an **entity**.

A **type** is a specification of how the value of a records is to be interpreted. A type is defined by a **schema record**. The schema record defines how to validate records of this type, and how this record is indexed.

An **file record** is a record that describes a file stored in a island and has **type:** 'file'.
