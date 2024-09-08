import { Stack } from "expo-router";


export default function (){
    return (
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="new"
          options={{
            presentation: "modal",
            title: "New Plant Form",
          }}
        />
      </Stack>
    );
}