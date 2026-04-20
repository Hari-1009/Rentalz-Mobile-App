import { View, Text } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'

export default function Profile() {
  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:'poppins-Bold',
        fontSize:30
      }}>Profile</Text>
      {/* intro  */}
      <UserIntro/>
      {/* menu list  */}
      <MenuList/>
    </View>
  )
}