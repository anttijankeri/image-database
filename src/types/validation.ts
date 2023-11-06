import * as dataTypes from "./index";
import DataObject from "../config";
import z from "zod";

const stringSchema = z.string();

const booleanSchema = z.boolean();

const numberSchema = z.number();

const dateSchema = z.date();

const optionalSchema = z.optional();

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const fileSchema = z
  .any()
  .refine((files) => files?.length === 0, "Image is required.") // if no file files?.length === 0, if file files?.length === 1
  .refine(
    (files) => files?.[0]?.size >= MAX_FILE_SIZE,
    `Max file size is 50MB.`
  ) // this should be greater than or equals (>=) not less that or equals (<=)
  .refine(
    (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    ".jpg, .jpeg, .png and .webp files are accepted."
  );
