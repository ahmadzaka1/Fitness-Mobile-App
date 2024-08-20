import { useRouter } from 'expo-router'
import React from 'react'
import {View, Text, FlatList} from 'react-native'

export default function ExerciseList({data}) {
    const router = useRouter();
  return (
    <View>
        <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-between'
        }}
        renderItem={({item, index}) => <ExerciseCard router={router} index={index} item={item}/>}
        />
    </View>
  )
}

const ExerciseCard = () => {
    return (
        <Text>Exercise Card</Text>
    )
}