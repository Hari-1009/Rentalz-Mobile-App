import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../Configs/Firebase'
import PopularBusinessCard from '../../components/HomeScreen/PopularBusinessCard'
import { Colors } from '../../constants/Colors'
export default function CollectionList() {

    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        GetBusinessList();
    }, [])
    const GetBusinessList = async () => {
        setBusinessList([]);
        const q = query(collection(db, 'CollectionList'), limit(10));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setBusinessList(prev => [...prev, {id:doc.id,...doc.data()}])
        })
    }
    return (
        <View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{
                    fontFamily: 'poppins-Bold',
                    color:Colors.Primary,
                    fontSize:15,
                    paddingLeft: 20,
                    marginTop:20
                }}>
                    Popular Rentals
                </Text>
                <Text style={{fontSize:12,
                    paddingRight:20,
                    marginTop:20,
                    color:Colors.Secondary,
                    fontFamily:'poppins-Medium'
                    }}>Swipe</Text>
            </View>
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <PopularBusinessCard
                    key={index}
                    business={item}
                    
                    />
                )}
            />
        </View>
    )
}