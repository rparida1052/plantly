import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserStore } from "@/store/useStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/component/plantlyButton";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

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
      colors={[theme.colorGreen,theme.colorAppleGreen,theme.colorLimeGreen]}
      style={styles.container}
      >
        <View>
          <PlantlyButton title="Let Me in !" onPress={handleOnboarding} />
        </View>
        <StatusBar style="light"/>
      </LinearGradient>
    
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
