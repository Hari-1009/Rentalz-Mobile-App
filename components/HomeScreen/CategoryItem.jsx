import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryItem({ category,onCategoryPress }) {
    return (
        <TouchableOpacity onPress={()=>onCategoryPress(category)}>
            <View style={{padding:15,
                marginRight:15
            }}>
                <Image source={{ uri: category?.imageURL }}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            </View>
            <Text style={{fontSize:12,
                fontFamily:'outfit-Medium',
                textAlign:'center',marginRight:15
                }}>{category.title}</Text>
        </TouchableOpacity>
    )
}