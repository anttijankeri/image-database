import * as dataTypes from "./data_types";
import z from "zod";

export const DataObjectSchema = z
  .object({
    // ADD YOUR OWN DATA TYPES HERE
    // USE TYPES IN DATA_TYPES/INDEX.TS
    // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVvV
    // -----------------------------------

    genusName: dataTypes.StringData,
    speciesName: dataTypes.StringData,
    commonName: dataTypes.StringData,
    identifyingInfo: dataTypes.StringData,
    placeOfOrigin: dataTypes.StringData,
    acquiredFrom: dataTypes.StringData,
    growingNote: dataTypes.StringData,
    freeNote: dataTypes.StringData,
    publication: dataTypes.StringData,
    purchasePrice: dataTypes.StringData,
    salePrice: dataTypes.StringData,
    collectionTag: dataTypes.StringData,

    forSale: dataTypes.BooleanData,

    dateAcquired: dataTypes.DateData,
    dateFirstFlower: dataTypes.DateData,
    dateLastFlower: dataTypes.DateData,
    dateRemoved: dataTypes.DateData,

    images: dataTypes.ImageDataArray,
    events: dataTypes.DiaryDataArray,
    shared: dataTypes.BooleanDataArray,

    // -----------------------------------
    // ^^^^ DATATYPES ABOVE THIS LINE ^^^^
  })
  .strict();

export type DataObject = z.infer<typeof DataObjectSchema>;
