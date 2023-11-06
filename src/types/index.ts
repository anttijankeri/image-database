type StringData = string;

type StringArray = StringData[];

type BooleanData = boolean;

type BooleanArray = BooleanData[];

type NumberData = number;

type NumberArray = NumberData[];

type DateData = Date;

type DateArray = DateData[];

type ImageFile = File;

type ImageData = {
  imageFile?: ImageFile;
  imageLink: StringData;
  shared: BooleanData;
};

type ImageArray = ImageData[];

type DiaryEvent = {
  date: DateData;
  note: StringData;
};

type DiaryArray = DiaryEvent[];

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
