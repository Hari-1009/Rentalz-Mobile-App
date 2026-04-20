import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from 'react-native'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from '../components/LoginScreen'
import * as SecureStore from 'expo-secure-store';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function RootLayout() {
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('../assets/fonts/Outfit-Light.ttf'),
    'outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-Medium':require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-Light':require('../assets/fonts/Poppins-Light.ttf')
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="(tabs)"/>
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}