import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vehicules',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Notifications: {
      pushSenderId: 'io.ionic.starter'
    }
  }
};



export default config;
