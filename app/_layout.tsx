  import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';

  export default function Layout() {
    return (
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7bd5ff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* Optionally configure static options outside the route.*/}
        <Tabs.Screen name="index" options={{title:"Home", tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          )}} />
        <Tabs.Screen name="contador" options={{title:"Contador", tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calculator' : 'calculator-outline'} color={color} />
          )}} />
        <Tabs.Screen name="Profile" options={{title:"Perfil", tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          )}} />
       
      </Tabs>
   
    );
  }
  