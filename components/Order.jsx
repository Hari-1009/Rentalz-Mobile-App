import { View, Text } from 'react-native'
import React from 'react'

export default function Order({business}) {
  return (
    <View>
      <Text>{business?.name}</Text>
    </View>
  )
}