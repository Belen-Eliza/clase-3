import Contador from "@/components/contador";
import Tarjeta from "@/components/Tarjeta";
import Letra from "@/components/Letra";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function Index() {
  const palabra: string = "hola";
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
      <Letra letra="A" palabra={palabra}/>  
       <Letra letra="B" palabra={palabra}/> 
       <Letra letra="C" palabra={palabra}/> 
       <Letra letra="D" palabra={palabra}/> 
       <Letra letra="E" palabra={palabra}/>
      <Letra letra="F" palabra={palabra}/>  
      <Letra letra="G" palabra={palabra}/> 
      <Letra letra="H" palabra={palabra}/> 
      <Letra letra="I" palabra={palabra}/> 
      <Letra letra="J" palabra={palabra}/>
      <Letra letra="K" palabra={palabra}/>  
      <Letra letra="L" palabra={palabra}/> 
      <Letra letra="M" palabra={palabra}/> 
      <Letra letra="N" palabra={palabra}/> 
      <Letra letra="Ñ" palabra={palabra}/>
      <Letra letra="O" palabra={palabra}/>  
      <Letra letra="P" palabra={palabra}/> 
      <Letra letra="Q" palabra={palabra}/> 
      <Letra letra="R" palabra={palabra}/> 
      <Letra letra="S" palabra={palabra}/>
      <Letra letra="T" palabra={palabra}/>  
      <Letra letra="U" palabra={palabra}/> 
      <Letra letra="V" palabra={palabra}/> 
      <Letra letra="W" palabra={palabra}/>
       <Letra letra="X" palabra={palabra}/>
      <Letra letra="Y" palabra={palabra}/>  
      <Letra letra="Z" palabra={palabra}/>

    </View>
  )
}
