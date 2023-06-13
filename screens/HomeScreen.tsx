import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import useRevenueCat from '../hooks/useRevenueCat';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Paywall">

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();

  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Paywall")} className='absolute z-50 top-5 right-10 items-center'>
          <Ionicons name="person-circle" size={30} color="#FF6F00" />
          <Text className='text-center text-[#FF6F00]'>{isProMember ? "PRO" : "Upgrade"}</Text>
        </TouchableOpacity>
        <View className='flex items-center justify-center mx-6'>
          <Image
            source={{ uri: "https://i.imgur.com/CbRoYoq.png" }}
            className='h-64 w-full'
          />
        </View>
        <View className='mx-5'>
          <View className='flex-row justify-between space-x-2'>
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#FF6F00"
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982C4"
              icon="library"
              vertical
            />
          </View>
          <ActionRow
            title="Connect with Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
          />
          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            requiresPro
          />
          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"
            requiresPro
          />
          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen