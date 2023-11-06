type StringData = string;

type StringArray = StringData[];

type BooleanData = boolean;

type BooleanArray = BooleanData[];

type NumberData = number;

type NumberArray = NumberData[];

type DateData = Date;

type DateArray = DateData[];

type ImageData = {
  imageLink: string;
  shared: boolean;
};

type ImageArray = ImageData[];

type DiaryEvent = {
  date: Date;
  note: string;
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
