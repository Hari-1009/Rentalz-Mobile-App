// import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
// import React, { lazy, useEffect, useState } from 'react'
// import { useLocalSearchParams } from 'expo-router'
// import { collection, getDoc, query, where, doc } from 'firebase/firestore';
// import { db } from '../../Configs/Firebase';
// import { Colors } from '../../constants/Colors';
// import Intro from '../../components/BusinessDetail/Intro';
// import ActionButton from '../../components/BusinessDetail/ActionButton';
// import About from '../../components/BusinessDetail/About';
// import Reviews from '../../components/BusinessDetail/Reviews';

// export default function BusinessDetail() {

//     const { businessid } = useLocalSearchParams();
//     const [business, setBusiness] = useState();
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         GetBusinessDetailsById();
//     }, [])


//     const GetBusinessDetailsById = async () => {
//         setLoading(true);
//         const docRef = doc(db, 'CollectionList', businessid)
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//             console.log("Document Date:", docSnap.data());
//             setBusiness({id:docSnap.id,...docSnap.data()});
//             setLoading(false)
//         }
//         else {
//             console.log("No such document!");
//         }
//     }
//     return (
//         <ScrollView>
//             {loading ?
//                 <ActivityIndicator
//                     style={{
//                         marginTop: '70%'
//                     }}
//                     size={'large'}
//                     color={Colors.Primary}
//                 /> :
//                 <View>
//                     {/* into  */}
//                     <Intro business={business}/>
//                     {/* action button  */}
//                     <ActionButton business={business}/>
//                     {/* about section  */}
//                     <About business={business}/>
//                     {/* Review section */}
//                     <Reviews business={business}/>
//                 </View>
//             }
//         </ScrollView>
//     )
// }
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../Configs/Firebase';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Reviews from '../../components/BusinessDetail/Reviews';
import Order from '../../components/Order';

export default function BusinessDetail() {
    const { businessid } = useLocalSearchParams();
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBusinessDetails = async () => {
            try {
                const docRef = doc(db, 'CollectionList', businessid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBusiness({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBusinessDetails();
    }, [businessid]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={Colors.Primary} />
            </View>
        );
    }

    const sections = [
        { id: '1', component: <Intro business={business} /> },
        { id: '2', component: <ActionButton business={business} /> },
        { id: '3', component: <About business={business} /> },
        { id: '4', component: <Reviews business={business} /> },
        {id:'5',component:<Order business={business}/>}
    ];

    return (
        <FlatList
            data={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => item.component}
            
        />
    );
}
