  import { Tabs } from 'expo-router';

  export default function Layout() {
    return (
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ff30cc5',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* Optionally configure static options outside the route.*/}
        <Tabs.Screen name="index" options={{}} />
        <Tabs.Screen name="contador" options={{}} />
        <Tabs.Screen name="perfil" options={{}} />
      </Tabs>
    );
  }
  