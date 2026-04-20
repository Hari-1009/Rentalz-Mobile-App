import { View, Text } from 'react-native'
import React from 'react'

export default function About({business}) {
  return (
    <View style={{
        backgroundColor:'#fff',
        paddingLeft:20
    }}>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:20,
      }}>About</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:15,
        marginTop:5
      }}>{business?.about}</Text>
    </View>
  )
}