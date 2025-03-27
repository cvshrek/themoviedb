import Config from "react-native-config";

export class PathHelper {
  static getImgPath(path: string): string {
    return `${Config.IMAGE_URL}/${path}`;
  }
}