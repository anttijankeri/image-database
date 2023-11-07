import z from "zod";

const StringData = z.string();

const StringArray = z.string().array();

const BooleanData = z.boolean();

const BooleanArray = z.boolean().array();

const NumberData = z.number();

const NumberArray = z.number().array();

const DateData = z.date();

const DateArray = z.date().array();

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ImageFile = z
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

const ImageData = z.object({
  imageFile: ImageFile.optional(),
  imageLink: StringData,
  shared: BooleanData,
});

const ImageArray = ImageData.array();

const DiaryEvent = z.object({
  date: DateData,
  note: StringData,
});

const DiaryArray = DiaryEvent.array();

export {
  StringData,
  StringArray,
  BooleanData,
  BooleanArray,
  NumberData,
  NumberArray,
  DateData,
  DateArray,
  ImageData,
  ImageArray,
  DiaryEvent,
  DiaryArray,
};
