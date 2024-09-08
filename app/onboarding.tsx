import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUserStore } from '@/store/useStore'
import { useRouter } from 'expo-router';

const Onboarding = () => {

    const toggleHasOnboarding = useUserStore((state)=>state.toggleOnboarding);
    const router = useRouter();
    const handleOnboarding = () =>{
        toggleHasOnboarding();
        router.replace("/")
    }
  return (
    <SafeAreaView>
      <View>
        <Text>Onboarding</Text>
        <Button title="Let me In !" onPress={handleOnboarding} />
      </View>
    </SafeAreaView>
  );
}

export default Onboarding

const styles = StyleSheet.create({})