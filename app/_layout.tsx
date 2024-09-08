import { Stack } from "expo-router";


export default function (){
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown:false
            }}/>
            <Stack.Screen name="onboarding"/>
        </Stack>
    );
}