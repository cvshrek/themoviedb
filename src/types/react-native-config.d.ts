declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL?: string;
    API_TOKEN?: string;
    ACCOUNT_ID?: string;
    IMAGE_URL?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
