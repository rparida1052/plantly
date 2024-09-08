import {  Text } from 'react-native'
import React from 'react'
import {  Redirect, Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from "@expo/vector-icons/Feather";
import { theme } from '@/theme';
const hasFinishedOnboarding = false;


const RootLayout = () => {
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen,
      }}
       
      >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ color, position }) => (
            <Text style={{ color: color }}>Home</Text>
          ),
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: ({ color, position }) => (
            <Text style={{ color: color }}>User</Text>
          ),
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default RootLayout