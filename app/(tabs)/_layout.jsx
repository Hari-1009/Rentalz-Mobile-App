import React from 'react'
import {Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from '../../constants/Colors'

export default function Tablayout() {
  return (
    <Tabs screenOptions={{headerShown:false,
      tabBarActiveTintColor:Colors.Primary
    }}>
        <Tabs.Screen name='Home'
        options={{tabBarLabel:'Home',
          tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}
          />
        }}
        />
        <Tabs.Screen name='Profile'
        options={{tabBarLabel:'Profile',
          tabBarIcon:({color})=><Ionicons name="people" size={24} color={color}/>}}/>
    </Tabs>
  )
}