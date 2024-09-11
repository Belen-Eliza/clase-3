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
        <Tabs.Screen name="index" options={{title:"Home", tabBarIcon:({focused,color})=><TabBarIcon name={focused? 'airplane' : 'airplane-outline'} />}} />
        <Tabs.Screen name="contador" options={{title:"Contador"}} />
        <Tabs.Screen name="Profile" options={{title:"Perfil"}} />
       
      </Tabs>
   
    );
  }
  