import { access, mkdir } from "fs/promises";

const checkCreateFolder = async (filePath: string) => {
  try {
    try {
      await access(filePath);
      return true;
    } catch {
      await mkdir(filePath);
      return true;
    }
  } catch {
    return false;
  }
};

export default checkCreateFolder;
