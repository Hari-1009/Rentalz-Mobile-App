import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Configs/Firebase'
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';
import Addbusiness from '../business/add-business';
export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category
    });
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    setLoading(true);
    const q = query(collection(db, 'CollectionList'), where("category", '==', category));
    const querySnapshot = await getDocs(q);
    const businesses = querySnapshot.docs.map(doc => ({
      id: doc.id, // Ensure each business has a unique ID
      ...doc.data()
    }));
    setBusinessList(businesses);
    setLoading(false);
  };

  return (
    <View>

      <View>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: "60%" }}
            size={'large'}
            color={Colors.Primary}
          />
        ) : businessList.length > 0 ? (
          <FlatList
            data={businessList}
            onRefresh={getBusinessList}
            refreshing={loading}
            renderItem={({ item }) => (
              <BusinessListCard
                business={item}
                key={item.id} // Use unique ID as key
              />
            )}
            keyExtractor={(item) => item.id} // Ensure unique key for each item
          />
        ) : (
          <Text
            style={{
              fontFamily: 'outfit-Bold',
              fontSize: 20,
              color: 'grey',
              textAlign: 'center',
              marginTop: "50%"
            }}
          >
            No Business found
          </Text>
        )}
      </View>
    </View>
  );
}
