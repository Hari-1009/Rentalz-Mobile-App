import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const { user } = useUser();
  return (
    <View style={{
      padding: 20,
      paddingTop: 40,
      backgroundColor: Colors.Primary,
      borderRadius:20,
      width:300,
      height:150,
      justifyContent:'center',
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent:'space-between'
      }}>
        
        <View>
          <Text style={{
            color: '#fff',
            fontSize: 15,
            fontFamily:'poppins-Medium'
          }}>Welcome,</Text>
          <Text style={{
            fontSize: 25,
            fontFamily: 'poppins-Regular',
            color: '#fff'
          }}>{user?.fullName}</Text>
        </View>
        <Image source={{ uri: user?.imageUrl }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 99,
            
          }}
        />
      </View>
      <Text style={{
        textAlign:'center',
        color:'#fff',
        marginTop:10,
        fontStyle:'italic',
        fontFamily:'poppins-Medium',
        fontSize:13
      }}>"Rent Smarter, Live Better: Affordable Home Appliances at Your Fingertips"</Text>
      {/* searchbar
      <View style={{
          display:'flex',
          flexDirection:'row',
          backgroundColor:'#fff',
          padding:8,
          margin:5,marginTop:16,
          borderRadius:8,
          alignItems:'center',
          gap:10
        }}>
        <Ionicons name="search" size={24} color={Colors.Primary} />
        <TextInput placeholder='Search...' style={{
          fontFamily:'outfit',
          fontSize:17
        }} />
        </View> */}
    </View>
  )
}