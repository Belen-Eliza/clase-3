import { Stack, Tabs } from 'expo-router';

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='a_perfil' options={{title: "Perfil", headerShown: false}}/>
            <Stack.Screen name='modal' options={{presentation:"card", headerShown: false}}/>
        </Stack>
    )
} 