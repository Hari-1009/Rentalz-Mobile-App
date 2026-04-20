import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-expo';
import { db } from '../../Configs/Firebase';

export default function Reviews({ business }) {
    const [rating, setRating] = useState(4);
    const [userInput, setUserInput] = useState();
    const { user } = useUser();
    const onSubmit = async () => {
        const docRef = doc(db, 'CollectionList', business?.id)
        await updateDoc(docRef, {
            Reviews: arrayUnion({
                rating: rating,
                comment: userInput,
                userName: user?.fullName,
                userImage: user?.imageUrl,
                userEmail: user?.primaryEmailAddress?.emailAddress
            })
        })
        ToastAndroid.show('Comment Added Successfully !', ToastAndroid.BOTTOM)
    }
    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 20
        }}>
            <Text style={{
                fontFamily: 'outfit-Bold',
                fontSize: 20,
            }}>Review</Text>
            <View>
                <Rating
                    showRating={false}
                    imageSize={20}
                    onFinishRating={(rating) => setRating(rating)}
                    style={{ paddingVertical: 10 }}
                />
                <TextInput
                    placeholder='write your comment'
                    numberOfLines={4}
                    onChangeText={(value) => setUserInput(value)}
                    style={{
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: 'grey',
                        textAlignVertical: 'top'
                    }}
                />
                <TouchableOpacity
                    disabled={!userInput}
                    onPress={() => onSubmit()}
                    style={{
                        padding: 10,
                        backgroundColor: Colors.Primary,
                        borderRadius: 6,
                        marginTop: 10
                    }}>
                    <Text style={{
                        fontFamily: 'outfit-Bold',
                        textAlign: 'center',
                        color: '#fff'
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}