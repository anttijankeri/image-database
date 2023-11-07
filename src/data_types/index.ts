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
  .refine((file) => file?.length === 0, "Image is required.")
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
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
