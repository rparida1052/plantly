import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserStore } from "@/store/useStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/component/plantlyButton";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import PlantlyImage from "@/component/plantlyImage";

const Onboarding = () => {
  const toggleHasOnboarding = useUserStore((state) => state.toggleOnboarding);
  const router = useRouter();
  const handleOnboarding = () => {
    toggleHasOnboarding();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}>
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plant healthy and hydrated</Text>
      </View>

      <PlantlyImage />
      <PlantlyButton title="Let Me in !" onPress={handleOnboarding} />

      <StatusBar style="light" />
    </LinearGradient>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    borderWidth:10
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colorWhite,
    marginBottom: 12,
    textAlign:"center"
  },
  tagline: {
    fontSize: 28,
    color: theme.colorWhite,
    textAlign:"center"
  },
});
