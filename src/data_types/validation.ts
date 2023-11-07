import { DataObject, DataObjectSchema } from "../config";

const validateData = (data: DataObject) => {
  return DataObjectSchema.safeParse(data).success;
};

export default validateData;
