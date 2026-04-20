import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function businessListCard({ business }) {
  const router = useRouter();
  return (
    <TouchableOpacity style={{
      padding: 10,
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    }}
      onPress={() => router.push('/businessdetail/' + business.id)}
    >
      <Image source={{ uri: business?.imageURL }}
        style={{
          height: 120,
          width: 120,
          borderRadius: 15
        }}
      />
      <View style={{
        flex: 1,
        gap: 7
      }}>
        <Text style={{
          fontFamily: 'outfit-Bold',
          fontSize: 20,

        }}>{business.name}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{
            fontFamily: 'poppins-Medium',
            color: 'red',
            fontSize: 20
          }}>₹</Text>
          <Text style={{
            fontFamily: 'poppins-Medium',
            color: 'red',
            fontSize: 20

          }}>{business.price}</Text>
          <Text style={{ fontFamily: 'poppins-Medium' }}>/month</Text>
        </View>
        {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 5, }}>
          <Image source={require('../../assets/images/star.png')}
            style={{
              width: 17,
              height: 17
            }} />
          <Text style={{ fontSize: 15, fontFamily: 'outfit', }}>4.5</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  )
}