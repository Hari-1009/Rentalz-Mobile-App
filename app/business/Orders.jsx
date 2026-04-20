import { View, Text, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../Configs/Firebase'

import {useRouter} from 'expo-router'
import { Colors } from '../../constants/Colors'
import MyBusiness from './my-business'
export default function Orders({explore=false,onCategorySelect}) {

    const [sliderList, setSliderList] = useState([]);
    const router=useRouter();
    useEffect(() => {
        GetSliderList();
    }, [])

    const GetSliderList = async () => {
        setSliderList([]);
        const q = query(collection(db, 'CategoryList'),limit(10));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setSliderList(prev => [...prev, doc.data()])
        })
    }

    const onCategoryPressHandler=(item)=>{
        if(!explore){
            router.push('/businesslist/'+item.title)
        }
        else{
            onCategorySelect(item.title)
        }
    }
    return (
        <View>
            {!explore&&
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <Text style={{
                    fontFamily: 'poppins-Bold',
                    paddingLeft: 20,
                    color:Colors.Primary,
                    fontSize:15,
                }}>
                    Category
                </Text>
                <Text style={{fontSize:12,
                    paddingRight:20,
                    marginTop:5,
                    fontFamily:'poppins-Medium',
                    color:Colors.Secondary,
                    
                    }}>Swipe</Text>
            </View>}
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginLeft:20}}
                renderItem={({ item, index }) => (
                    <MyBusiness
                    key={index}
                    category={item}
                    onCategoryPress={(category)=>
                        onCategoryPressHandler(item)}
                    />
                )}
            />
        </View>
    )
}