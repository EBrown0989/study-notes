TODO: Extract useful info from the docs so that notes aren't quite as extensive.

## Databases and Collections

MongoDB stores BSON (Binary JSON) documents in collections, which are stored in
databases.

MONGO:
    use <db>
    use myNewDB
    db.myNewCollection1.insertOne({x:1})
    db.myNewCollection2.createIndex({y:1})

db.createCollection() method is to explicitly create a collection with various
options, i.e., maximum size and document validation rules.

collMod method to modify these rules.

## Views

db.runCommand({
    create: <view>,
    viewOn: <source>,
    pipeline: <pipeline>
    collation: <collation>
})

db.createView(<view>, <source>, <pipeline>, <collation>)

NOTE: You must create views in the same database as the source collection.

Views are read-only; write operations on views will error.

View supported:
    db.collection.find()
    db.collection.findOne()
    db.collection.aggregate()
    db.collection.countDocuments()
    db.collection.estimatedDocumentCount()
    db.collection.count()
    db.collection.distinct()

Collation is not inherited, and defaults to `simple` unless specified.

For an aggregation, views must have the same collation.

Drop / Modify a View:
    db.collection.drop()
    collMod

## Capped Collections
