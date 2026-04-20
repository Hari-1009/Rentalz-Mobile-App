import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

export default function PopularBusinessCard({ business }) {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => router.push("/businessdetail/" + business?.id)}
            style={{
                marginLeft: 20,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 15
            }}>
            <Image source={{ uri: business?.imageURL }}
                style={{
                    width: 200,
                    height: 130,
                    borderRadius: 15
                }}
            />
            <View style={{ marginTop: 7, gap: 5,}}>
                <Text numberOfLines={2} style={{
                    fontFamily: 'poppins-Bold',
                    fontSize: 17,
                    width:200,
                    
                }}>{business.name}</Text>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <Text style={{
                        fontFamily: 'poppins-Bold',
                        fontSize: 15,
                        color: 'red'
                    }}>Just ₹{business.price}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        {/* <View style={{ display: 'flex', flexDirection: 'row', gap: 5, }}>
                        <Image source={require('../../assets/images/star.png')}
                            style={{
                                width: 17,
                                height: 17
                            }} />
                        <Text style={{ fontSize: 15, fontFamily: 'outfit', }}>4.5</Text>
                    </View> */}
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 10,
                            color: 'white',
                            padding: 2,
                            borderRadius: 5,
                            height:20,
                            backgroundColor:Colors.Primary
                        }}
                        >{business.category}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}