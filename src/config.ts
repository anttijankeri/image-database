import * as dataTypes from "./types/";
import z from "zod";

const DataObject = z
  .object({
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

    images: dataTypes.ImageArray,
    events: dataTypes.DiaryArray,
    shared: dataTypes.BooleanArray,
  })
  .strict();

export default DataObject;
