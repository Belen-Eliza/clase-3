import Tarjeta from "@/components/Tarjeta";
import { View } from 'react-native';
import estilos from "@/components/misEstilos";

export default function Index() {
  
  return (
    <View style={estilos.mainView2}>
      <Tarjeta texto="Hola"/>
      <Tarjeta texto="Mundo"/>
      <Tarjeta texto="!"/>
    </View>
  )
}
