  import { Stack, Tabs } from 'expo-router';

  export default function Layout() {
    return (
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8080ff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* Optionally configure static options outside the route.*/}
        <Tabs.Screen name="index" options={{title:"Home"}} />
        <Tabs.Screen name="contador" options={{title:"Contador"}} />
        <Tabs.Screen name="Profile/index" options={{title:"Perfil"}} />
        <Tabs.Screen name="Profile/modal" options={{href: null}} />

      </Tabs>
   
    );
  }
  