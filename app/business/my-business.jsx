// import { View, Text, FlatList } from 'react-native'
// import React, { useEffect,useState } from 'react'
// import {useUser} from '@clerk/clerk-expo'
// import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
// import {db} from '../../Configs/Firebase'
// import BusinessListCard from '../../components/BusinessList/BusinessListCard'
// import { useNavigation } from 'expo-router'
// import { Colors } from '../../constants/Colors'

// export default function MyBusiness() {

//     const {user}=useUser();
//     const [businessList,setBusinessList]=useState([]);
//     const [loading,setLoading]=useState(false);
//     const navigation=useNavigation();
//     useEffect(()=>{
//         navigation.setOptions({
//             headerShown:true,
//             headerTitle:'My Orders',
//             headerStyle:{
//                 backgroundColor:'#fff'
//             }
            
//         })
//         user&&GetUserBusiness();

//     },[user])

//     // used to get list by user email

//     const GetUserBusiness=async()=>{
//         setLoading(true);
//         setBusinessList([]);
//         const q=query(collection(db,'CollectionList'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));
//         const querySnapShpt=await getDocs(q);
//         querySnapShpt.forEach((doc)=>{
//             console.log(doc.data());
//             setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
//         })
//         setLoading(false);
//     }
//   return (
//     <View style={{
//         padding:20
//     }}>
//       <FlatList
//       data={businessList}
//       onRefresh={GetUserBusiness}
//       refreshing={loading}
//       renderItem={({item,index})=>(
//         <BusinessListCard business={item}
//         key={index}/>
//       )}
//       />
//     </View>
//   )
// }
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyBusiness({ category,onCategoryPress }) {
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
                }}>{category?.title}</Text>
        </TouchableOpacity>
    )
}