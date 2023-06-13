import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Paywall">

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <ScrollView className='bg-[#1A2F44] flex-1'>
      <View className='m-10 space-y-2'>
        <Text className='text-2xl text-center uppercase text-white font-bold'>
          Upgrade
        </Text>
        <Text className='text-center text-white'>
          Upgrade to Pro to Access all the Features
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-0 right-0 p-5'>
        <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
      </TouchableOpacity>
      {/*  Logo */}
      <View className='items-center'>
        <MaterialCommunityIcons name="trophy-award" size={150} color="#E5962D" />
      </View>
      
      {/*  Content */}
      <View className='space-y-5 px-10 py-5'>
        <View className='flex-row space-x-10 items-center'>
          <Ionicons name="md-key" size={32} color="#E5962D" />
          <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>Access to all Pro Features</Text>
            <Text className='text-white text-sm font-extralight0j '>Upgrade to unlock all the exclusive features of the CobyFit available only to pro users.</Text>
          </View>
        </View>
        <View className='flex-row space-x-10 items-center'>
          <Ionicons name="md-person-add-outline" size={32} color="#E5962D" />
          <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>
              Helpline 24/7 to Personal Trainers
            </Text>
            <Text className='text-white text-sm font-extralight'>
              Get unlimited access to our fitness support team and get help anytimne you ned it - day or night.
            </Text>
          </View>
        </View>
        <View className='flex-row space-x-10 items-center'>
          <Ionicons name="md-star" size={32} color="#E5962D" />
          <View className='flex-1'>
            <Text className='text-white font-bold text-lg'>Unlock Limited Edition Content</Text>
            <Text className='text-white text-sm font-extralight'>Unlock Exclusive content that you can't get anywhere else, like special workouts and routines.</Text>
          </View>
        </View>
      </View>

      {/* monthly subscribe */}

      {/* annual subscribe */}

      {/* restore purchases */}
      
    </ScrollView>
  )
}

export default PaywallScreen