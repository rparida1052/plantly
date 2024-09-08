import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUserStore } from '@/store/useStore'

const Profile = () => {
  const toggleHasOnboarded = useUserStore((store) => store.toggleOnboarding);

  return (
    <View>
      <Text>Profile</Text>
      <Button title='Log out'onPress={toggleHasOnboarded}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})