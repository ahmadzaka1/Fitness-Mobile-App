import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {ScrollView, StatusBar, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Text, View, Image } from 'react-native'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from "react-native-vector-icons/Ionicons"
import ExerciseList from '../components/ExerciseList';


export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState();
    const item = useLocalSearchParams();
    useEffect(()=>{
        if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        console.log('got data:', data);
    }
  return (
    <SafeAreaView>
        <StatusBar style="light"/>
        <Image
        source={item.image}
        style={{width: wp(100), height: hp(45)}}
        className="rounded-b-[40px]"
        />
        <TouchableOpacity 
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute rounded-full"
        style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
        <Ionicons name="caret-back-outline" size={hp(3)} color="white"/>
        </TouchableOpacity>

        <View className="mx-4 space-y-3 mt-4">
          <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
            {item.name} exercises
          </Text>
          <View className="mb-10">
            <ExerciseList data={exercises}/>
          </View>
        </View>
    </SafeAreaView>
  )
}
