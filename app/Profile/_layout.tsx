import { Stack, Tabs } from 'expo-router';

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='index' options={{title: "Perfil", headerShown: false}}/>
            <Stack.Screen name='modal' options={{presentation:"card", headerShown: false}}/>
        </Stack>
    )
} 