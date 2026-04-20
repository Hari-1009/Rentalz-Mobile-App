import { View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/HomeScreen/Header';
import Slider from '../../components/HomeScreen/Slider';
import Category from '../../components/HomeScreen/Category';
import CollectionList from '../../components/HomeScreen/CollectionList';
export default function Home() {
  return (
    <ScrollView style={{
      backgroundColor:'#fff'
    }}>
      {/* header */}
      <Header />
      {/* slider */}
      <Slider />
      {/* category */}
      <Category/>
      {/* popular list */}
      <CollectionList/>
      <View style={{height:20}}>
      </View>
    </ScrollView>
  )
}