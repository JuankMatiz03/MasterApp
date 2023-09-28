import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.masterApp.com',
  appName: 'master-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
