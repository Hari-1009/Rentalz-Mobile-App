import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'; 
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { db, storage } from '../../Configs/Firebase'
import { getDownloadURL, ref,uploadBytes } from "firebase/storage";
import {useUser} from '@clerk/clerk-expo'
import{Colors} from '../../constants/Colors'

export default function Addbusiness() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const[categoryList,setCategoryList]=useState([]);
  const {user}=useUser();
  const [name,setName]=useState();
  const [contact,setContact]=useState();
  const [address,setAddress]=useState();
  const[pincode,setPincode]=useState();
  const [website,setWebsite]=useState();
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Order',
      headerShown: true,
    })
    GetCategoryList();
  }, [])

  const GetCategoryList=async()=>{
    setCategoryList([])
    const q=query(collection(db,'CollectionList'));
    const snapShot=await getDocs(q);
    snapShot.forEach((doc)=>{
      console.log(doc.data());
      setCategoryList(prev=>[...prev,{
        label:(doc.data()).category,
        value:(doc.data()).name

      }])
    })
  }

  // const onAddNewBusiness=async()=>{
  //   setLoading(true);
  //   const fileName =Date.now().toString()+".jpg";
  //   const resp=await fetch(image);
  //   const blob=await resp.blob();

  //   const imageRef=ref(storage,'business-app/'+fileName);

  //   uploadBytes(imageRef,blob).then((snapShot)=>{
  //     console.log("File Uploaded...")
  //   }).then(resp=>{
  //     getDownloadURL(imageRef).then(async(downloadUrl)=>{
  //       console.log(downloadUrl);
  //       saveBusinessDetail(downloadUrl)
  //     })
  //   })
  //   setLoading(false);
  // }

  const saveBusinessDetail=async()=>{
    await setDoc(doc(db,'Orders',Date.now().toString()),{
      cname:name,
      address:address,
      contact:contact,
      website:website,
      pincode:pincode,

      username:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      // userImage:user?.imageUrl,
    })
    setLoading(false);
    ToastAndroid.show("Order Placed...",ToastAndroid.LONG)
  }
  return (
    <View style={{
      padding: 20
    }}>
      <Text style={{
        fontFamily: 'poppins-Bold',
        fontSize: 20,
      }}>Address Details</Text>
      <Text style={{
        fontFamily: 'poppins-Medium',
        color: 'grey'
      }}>Fill all details to rent the product</Text>
      <View>
        <Text>hello </Text>
      </View>
      <View>
        <TextInput placeholder='Name'
        onChangeText={(v)=>setName(v)}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 15,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: 'grey',
            fontFamily: 'poppins-Medium',          }}
        />
        <TextInput placeholder='Contact'
                onChangeText={(v)=>setContact(v)}

          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 15,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: 'grey',
            fontFamily: 'poppins-Medium',          }}
        />
        <TextInput placeholder='Address'
                onChangeText={(v)=>setAddress(v)}

          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 15,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: 'grey',
            fontFamily: 'poppins-Medium',          }}
        />
        <TextInput placeholder='Pincode'
                onChangeText={(v)=>setPincode(v)}

          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 15,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: 'grey',
            fontFamily: 'poppins-Medium',          }}
        />
        <TextInput placeholder='Email'
                onChangeText={(v)=>setWebsite(v)}

          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 15,
            backgroundColor: '#fff',
            marginTop: 10,
            borderColor: 'grey',
            fontFamily: 'poppins-Medium',          }}
        />
        {/* <Text style={{fontSize:20,color:'ffff'}}>{business?.name}</Text> */}
      </View>
      <Text style={{
        padding:10,
        fontFamily:'poppins-Light',
        fontSize:12,
        color:'grey'
      }}>*only COD available</Text>
      <TouchableOpacity 
      disabled={loading}
      style={{
        padding:10,
        backgroundColor:Colors.Primary,
        borderRadius:5,
        marginTop:20
      }}
      onPress={()=>saveBusinessDetail()}
      >
        {loading?
        <ActivityIndicator size={'large'} color={'#fff'}/>:
        <Text style={{
          fontFamily:'poppins-Bold',
          textAlign:'center',
          color:'#fff'
        }}>Place Order</Text>}
      </TouchableOpacity>
      {/* <Text>hi{business?.price}</Text> */}
    </View>
  )
}