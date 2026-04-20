import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query } from 'firebase/firestore'
import { db } from '../../Configs/Firebase'
import {Colors} from '../../constants/Colors'
export default function Slider() {
  const [SliderList, setSliderList] = useState([]);
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, 'Slider'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList(prev => [...prev, doc.data()]);
    })
  }
  return (
    <View>
      <Text style={{
        fontFamily: 'poppins-Bold',
        padding: 20,
        color:Colors.Primary,
        fontSize:15
      }}>
        # Special For You
      </Text>
      <FlatList 
        data={SliderList}
        horizontal={true}
        style={{paddingLeft:20}}
        renderItem={({item,index})=>(
          <Image source={{uri:item.imageURL}} style={{
            width:320,
            height:150,
            borderRadius:15,
            marginRight:20
          }}/>
        )}
      />
    </View>
  )
}