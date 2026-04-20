import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Configs/Firebase';
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';

export default function Intro({ business }) {

    const router = useRouter();
    const { user } = useUser();
    const menuList = [
        {
            id: 1,
            name: 'Add Business',
            icon: require('../../assets/images/call.png'),
            path: '/components/Order'
        },

    ]
    const onMenuClick = (item) => {
        if (item.path == 'logout') {
            signOut();
            return;
        }
        if (item.path == 'share') {
            Share.share(
                {
                    message: 'Download the business app , Download the app url:'
                }
            )
            return;
        }
        router.push(item.path)
    }
    const onDelete = () => {
        Alert.alert('Do you want to Delete?', 'do you really delete?', [
            {
                text: 'Cancel',
                style: 'cancel',

            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => deleteBusiness()
            }
        ])
    }
    const deleteBusiness = async () => {
        console.log("Delete Business");
        await deleteDoc(doc(db, 'CollectionList', business?.id))
        router.back();
        ToastAndroid.show('Business Deleted!', ToastAndroid.LONG)
    }
    return (
        <View>
            <View style={{
                position: 'absolute',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 20
            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back-circle" size={30} color="white" />
                </TouchableOpacity>
                <Ionicons name="heart-outline" size={30} color="white" />
            </View>
            <Image source={{ uri: business?.imageURL }}
                style={{
                    width: "100%",
                    height: 300,
                }}
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                marginTop: -20,
                backgroundColor: '#fff',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                justifyContent: 'space-between',
            }}>
                <FlatList
                    data={menuList}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <View style={{
                            padding: 20,
                            marginTop: -20,
                            backgroundColor: '#fff',
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25
                        }}>
                            <Text style={{
                                fontSize: 24,
                                fontFamily: 'poppins-Bold'
                            }}>{business?.name}
                            </Text>
                            <View style={{marginBottom:20}}>
                                <TouchableOpacity onPress={() => onMenuClick(item)} style={{
                                    borderRadius: 15,
                                    borderWidth: 1,
                                    width: 280,
                                    height: 120,
                                    borderColor: 'lightgrey',
                                    backgroundColor: '#fff',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    marginRight: 10
                                }}>
                                    {/* <Text style={{
                                        fontSize: 15,
                                        fontFamily: 'poppins-Medium'
                                    }}>Low Cost</Text> */}
                                    <View style={{display:'flex',flexDirection:'row'}}>
                                        <Text style={{
                                            fontSize: 28,
                                            fontFamily: 'poppins-Bold'
                                        }}>₹{business?.price}</Text>
                                        <Text style={{
                                            fontFamily: 'poppins-Light',
                                            fontSize: 28,
                                            color: 'grey'
                                        }}>/month</Text>
                                        
                                    </View>
                                    <View style={{
                                        width: 80,
                                        height: 30,
                                        backgroundColor: Colors.Secondary,
                                        borderRadius: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            color: '#FFF',
                                            fontFamily: 'poppins-Medium'
                                        }}>Select</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={()=>onMenuClick(item)} style={{
                            borderRadius:15,
                            borderWidth:1,
                            width:125,
                            height:170,
                            borderColor:'lightgrey',
                            backgroundColor:'#fff',
                            justifyContent:'space-evenly',
                            alignItems:'center',
                            marginRight:10
                        }}>
                            <Text style={{
                                fontSize:15,
                                fontFamily:'poppins-Medium'
                            }}>6+ months</Text>
                            <Text style={{
                                fontSize:28,
                                fontFamily:'poppins-Bold'
                            }}>₹{business?.price2}</Text>
                            <Text style={{
                                fontFamily:'poppins-Medium',
                                fontSize:13,
                                color:'grey'
                            }}>/month</Text>
                            <View style={{
                                width: 80,
                                height: 30,
                                backgroundColor: Colors.Secondary,
                                borderRadius:20,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontFamily:'poppins-Medium'
                                }}>Select</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>onMenuClick(item)} style={{
                            borderRadius:15,
                            borderWidth:1,
                            width:125,
                            height:170,
                            borderColor:'lightgrey',
                            backgroundColor:'#fff',
                            justifyContent:'space-evenly',
                            alignItems:'center',
                            marginRight:10
                        }}>
                            <Text style={{
                                fontSize:15,
                                fontFamily:'poppins-Medium'
                            }}>3+ months</Text>
                            <Text style={{
                                fontSize:28,
                                fontFamily:'poppins-Bold'
                            }}>₹{business?.price3}</Text>
                            <Text style={{
                                fontFamily:'poppins-Medium',
                                fontSize:13,
                                color:'grey'
                            }}>/month</Text>
                            <View style={{
                                width: 80,
                                height: 30,
                                backgroundColor: Colors.Secondary,
                                borderRadius:20,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontFamily:'poppins-Medium'
                                }}>Select</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>onMenuClick(item)} style={{
                            borderRadius:15,
                            borderWidth:1,
                            width:125,
                            height:170,
                            borderColor:'lightgrey',
                            backgroundColor:'#fff',
                            justifyContent:'space-evenly',
                            alignItems:'center',
                        }}>
                            <Text style={{
                                fontSize:15,
                                fontFamily:'poppins-Medium'
                            }}>1+ months</Text>
                            <Text style={{
                                fontSize:28,
                                fontFamily:'poppins-Bold'
                            }}>₹{business?.price4}</Text>
                            <Text style={{
                                fontFamily:'poppins-Medium',
                                fontSize:13,
                                color:'grey'
                            }}>/month</Text>
                            <View style={{
                                width: 80,
                                height: 30,
                                backgroundColor: Colors.Secondary,
                                borderRadius:20,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontFamily:'poppins-Medium'
                                }}>Select</Text>
                            </View>
                        </TouchableOpacity> */}
                            </View>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: 'outfit'
                            }}>{business?.policy}</Text>
                        </View>
                    )}

                />
                {user?.primaryEmailAddress?.emailAddress == business?.userEmail && <TouchableOpacity
                    onPress={() => onDelete()}
                >
                    <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>}
            </View>
        </View>
    )
}