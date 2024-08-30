import Contador from "@/components/contador";
import Tarjeta from "@/components/Tarjeta";
import Letra from "@/components/Letra";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function Index() {
  
  return (
    <View style={{justifyContent: "space-around",
    alignItems: "center", 
    alignContent: "center", 
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "10%",
    marginTop: "40%",
    minHeight: 80
    }}>
      <Letra letra="A"/>  
       <Letra letra="B"/> 
       <Letra letra="C"/> 
       <Letra letra="D"/> 
       <Letra letra="E"/>
      <Letra letra="F"/>  
      <Letra letra="G"/> 
      <Letra letra="H"/> 
      <Letra letra="I"/> 
      <Letra letra="J"/>
      <Letra letra="K"/>  
      <Letra letra="L"/> 
      <Letra letra="M"/> 
      <Letra letra="N"/> 
      <Letra letra="Ñ"/>
      <Letra letra="O"/>  
      <Letra letra="P"/> 
      <Letra letra="Q"/> 
      <Letra letra="R"/> 
      <Letra letra="S"/>
      <Letra letra="T"/>  
      <Letra letra="U"/> 
      <Letra letra="V"/> 
      <Letra letra="W"/>
       <Letra letra="X"/>
      <Letra letra="Y"/>  
      <Letra letra="Z"/>

    </View>
  )
}
