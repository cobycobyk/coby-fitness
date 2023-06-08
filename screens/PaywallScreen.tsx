import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default PaywallScreen