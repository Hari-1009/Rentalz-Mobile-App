import { View, Text, Image, FlatList, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function MenuList() {
    const {signOut}=useAuth();
    const menuList = [
        {
            id: 2,
            name: 'My Orders',
            icon: require('../../assets/images/order.png'),
            path: '/business/my-business'
        },
        {
            id: 3,
            name: 'Share App',
            icon: require('../../assets/images/share.png'),
            path: 'share'
        },
        {
            id: 4,
            name: 'Logout',
            icon: require('../../assets/images/logout.png'),
            path: 'logout'
        },

    ]

    const router=useRouter();
    const onMenuClick=(item)=>{
        if(item.path=='logout'){
            signOut();
            return;
        }
        if(item.path=='share'){
            Share.share(
                {
                    message:'Download the business app , Download the app url:'
                }
            )
            return;
        }
        router.push(item.path)
    }
    return (
        <View style={{
            marginTop:50
        }}>
            <FlatList
                data={menuList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity 
                    onPress={()=>onMenuClick(item)}
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        gap:10,
                        flex:1,
                        padding:10,
                        borderRadius:15,
                        borderWidth:1,
                        margin:10,
                        backgroundColor:'#fff',
                    }}>
                        <Image source={item?.icon}
                        style={{
                            width:50,
                            height:50
                        }}
                        />
                        <Text style={{fontFamily:'poppins-Medium',
                            fontSize:15,
                            flex:1
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}