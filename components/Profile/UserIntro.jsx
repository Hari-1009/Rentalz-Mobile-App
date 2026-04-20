import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import {Colors} from '../../constants/Colors'

export default function UserIntro() {
    const { user } = useUser();
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor:Colors.Primary,
            height:250,
            justifyContent:'center',
            borderRadius:20,
        }}>
            
            <Image source={{ uri: user?.imageUrl }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 99
                }}
            />
            <Text style={{
                fontFamily: 'poppins-Medium',
                fontSize: 20,
                marginTop:10,
                color:'#fff'
            }}>{user?.fullName}</Text>
            <Text style={{
                fontFamily: 'poppins-Medium',
                fontSize: 15,marginTop:5,color:'#fff'

            }}>{user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
    )
}