import { View, Text, Image, FlatList, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'

export default function ActionButton({ business }) {
    const actionButtonMenu = [
        // {
        //     id:1,
        //     name:'Call',
        //     icon:require('../../assets/images/call.png'),
        //     url:'tel:'+business?.contact
        // },
        // {
        //     id:2,
        //     name:'Location',
        //     icon:require('../../assets/images/location.png'),
        //     url:'https://www.google.com/maps'
        // },
        {
            id: 3,
            name: 'Web',
            icon: require('../../assets/images/internet.png'),
            url: business?.website
        },
        {
            id: 4,
            name: 'Share',
            icon: require('../../assets/images/share.png'),
            url: business?.website
        }

    ]
    const onPressHandle = (item) => {
        if (item.name == 'Share') {
            Share.share({
                message: business?.name + "\n Address:" + business?.website + "\n Find More d9etails o1n business Details"
            })
            return;
        }
        Linking.openURL(item.url);
    }
    return (
        <View style={{
            backgroundColor: '#fff',
            paddingLeft: 20
        }}>
            {/* <Text style={{
                fontFamily: 'poppins-Bold',
                fontSize: 20,
                marginBottom: 10
            }}>Website & Share</Text>
            <FlatList
                data={actionButtonMenu}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}
                        onPress={() => onPressHandle(item)}
                    >
                        <Image source={item?.icon} style={{
                            width: 60,
                            height: 60,
                        }} />
                        <Text style={{
                            fontFamily: 'outfit',
                            textAlign: 'center', marginTop: 3
                        }}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            /> */}
        </View>
    )
}