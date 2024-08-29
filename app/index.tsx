import Contador from "@/components/contador";
import Tarjeta from "@/components/Tarjeta";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function Index() {
  
  return (
    <View style={{justifyContent: "space-between",
    alignItems: "center", 
    alignContent: "center", 
    flex: 1,
    marginBottom: "40%",
    marginTop: "40%"
    }}>
      <Tarjeta texto="Hola"/>
      <Tarjeta texto="Mundo"/>
      <Tarjeta texto="!"/>
    </View>
  )
}
