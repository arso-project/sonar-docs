# Sonar Core

This page documents `sonar-core`, the core package of the Sonar engine.

## High-level overview

![Sonar Core architecture](/img/sonar-core-architecture.svg)

Sonar Core forwards messages from hyper data structures into views and query engines. A **Collection** is a high-level container for a group of feeds. It includes a list of *source feeds*, a configuration of *views*, and *schemas* for data types. A collection is defined by its **root key**. By default, a collection is defined through a set of TOML or JSON files stored in a hyperdrive.

Collections can contain a list of *source feeds*. A source feed can be a hyperdrive, a sonar record feed, or (soon) other feeds like Cabal chat logs. A source feed can also be another collection, which allows for multiwriter usage.

Collections can also contain a list of *record types*. A record type defines the schema for an arbitrary data type used in the the collection.

Collection can also contain a list of *query engines*. A query engine receives all records in a collection, inserts them into some index it maintains, and provides a query function.
