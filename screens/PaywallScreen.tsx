import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useRevenueCat from '../hooks/useRevenueCat';
import Purchases from 'react-native-purchases';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Paywall">

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { currentOffering } = useRevenueCat();

  const handleMonthlyPurchase = async () => {
    if (!currentOffering?.monthly) return;

    const purchaserInfo = await Purchases.purchasePackage(currentOffering.monthly);

    if (purchaserInfo.customerInfo.entitlements.active.pro) {
      navigation.goBack();
    }
  };

  const handleAnnualPurchase = async () => {
    if (!currentOffering?.annual) return;

    const purchaserInfo = await Purchases.purchasePackage(currentOffering.annual);

    if (purchaserInfo.customerInfo.entitlements.active.pro) {
      navigation.goBack();
    }
   }
  
  const restorePurchases = async () => {
    const purchaserInfo = await Purchases.restorePurchases()
    if (purchaserInfo.activeSubscriptions.length > 0) {
      Alert.alert("Restore Successful", "Your purchase was successfully restored.");
    } else {
      Alert.alert("Error", "No purchases found to restore.");
    }

    if (purchaserInfo.entitlements.active.pro) {
      navigation.goBack();
    }
  };

  if (!currentOffering) {
    return (
      <View className='bg-[#1A2F44] flex-1 p-10'>
        <ActivityIndicator size="large" color="#E59620" />
      </View>
    )
  }
  
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

      <TouchableOpacity onPress={handleMonthlyPurchase} className='items-center px-10 py-5 bg-[#E59620] mx-10 rounded-full'>
        <Text className='text-white text-md text-center font-bold mb-1'>
          START A{" "}
          {currentOffering.monthly?.product.introPrice?.periodNumberOfUnits} X{" "}
          {currentOffering.monthly?.product.introPrice?.periodUnit} FREE TRIAL
        </Text>
        <Text className='text-white'>{currentOffering.monthly?.product.priceString}/month after</Text>
      </TouchableOpacity>

      {currentOffering.annual && (
        <TouchableOpacity onPress={handleAnnualPurchase} className='items-center px-10 py-5 border-2 border-[#E59620] mx-10 rounded-full mt-2'>
          <Text className='text-white uppercase text-md text-center-font-bold-mb-1'>
            Save{" "}
            {(
              (1- currentOffering.annual?.product.price! / (currentOffering.monthly?.product.price! * 12)) * 100).toPrecision(2
            )} % Annually
          </Text>
          <Text className='text-white'>
            {currentOffering.annual?.product.priceString }/year
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity className="m-5" onPress={restorePurchases}>
        <Text className="text-center text-[#E5962D]">Restore Purchases</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default PaywallScreen