import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View style={{}}>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 50, }}>
        <ScrollView horizontal>
          <Image source={require('../assets/images/photo5.png')}
            style={{ height: 350, width: 300}}
          />
          {/* <Image source={require('../assets/images/photo')}
            style={{ marginLeft: 50, height: 350, width: 170, borderRadius: 15, borderWidth: 5, borderColor: '#000' }}
          /> */}
          {/* <Image source={require('../assets/images/login.png')}
            style={{ marginLeft: 50, marginRight: 100, height: 350, width: 170, borderRadius: 15, borderWidth: 5, borderColor: '#000' }}
          /> */}
        </ScrollView>
      </View>
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 25 }}>
        <Image source={require('../assets/images/Rentalio.png')}
          style={{ height:100 , width: 300, }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 22, fontFamily: 'poppins-Bold', textAlign: 'center' }}>
          Team of passionate  <Text style={{ color: Colors.Optional, }}>
            Rentrepreneurs
          </Text>
        </Text>
        <Text style={{ fontFamily: 'poppins-Regular', fontSize: 12, textAlign: 'center', padding: 5, color: 'grey', }}>
          We rent appliances, electronics, furniture, and fitness gear monthly, tailored to you.        </Text>
        <TouchableOpacity style={styles.btn}  onPress={onPress}>
          <Text style={{ textAlign: 'center', fontFamily: 'poppins-Medium', fontSize: 18, color: '#fff', }}>
            Sign Up with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  subContainer: {
    padding: 5,
    marginTop: -20,
    alignItems:'center'
  },
  btn: {
    backgroundColor: Colors.Secondary,
    padding: 7,
    borderRadius: 99,
    marginTop: 20,
    width:250,
  },
  hl:{
    marginBottom:20
  }
})