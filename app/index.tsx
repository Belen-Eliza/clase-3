import Contador from "@/components/contador";
import Tarjeta from "@/components/Tarjeta";
import Letra from "@/components/Letra";
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet, Pressable } from 'react-native';
import { useState } from "react";
import Letra2 from "@/components/Letra2";


export default function Index() {
  const palabra: string = "hola";  
  const [descubiertas,agregarLetra] = useState(new Array());
  const a = ()=>{
    agregarLetra(prev=>{
      let n=prev;
      alert("press");
      n.push("o");
      return n
    })
  }
  const estilos = StyleSheet.create({
    view: {
      justifyContent: "space-around",
      alignItems: "center", 
      alignContent: "center", 
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
      marginBottom: "10%",
      minHeight: 200
    }
  });
  return (<>
    <View style={estilos.view}><Pressable style={{backgroundColor: "blue",minHeight:30}} onPress={a}><Text>Acá</Text></Pressable></View>
    <View style= {[estilos.view,{flex:4, marginHorizontal:"20%"}]}>
      <Letra2 letra="H" estado={descubiertas}/>
      <Letra2 letra="O" estado={descubiertas}/>
      <Letra2 letra="L" estado={descubiertas}/>
      <Letra2 letra="A" estado={descubiertas}/>
    </View>
    <View style={estilos.view}>
      <Letra letra="A" palabra={palabra} />  
       <Letra letra="B" palabra={palabra} /> 
       <Letra letra="C" palabra={palabra} /> 
       <Letra letra="D" palabra={palabra} /> 
       <Letra letra="E" palabra={palabra} />
      <Letra letra="F" palabra={palabra} />  
      <Letra letra="G" palabra={palabra} /> 
      <Letra letra="H" palabra={palabra} /> 
      <Letra letra="I" palabra={palabra} /> 
      <Letra letra="J" palabra={palabra} />
      <Letra letra="K" palabra={palabra} />  
      <Letra letra="L" palabra={palabra} /> 
      <Letra letra="M" palabra={palabra} /> 
      <Letra letra="N" palabra={palabra} /> 
      <Letra letra="Ñ" palabra={palabra} />
      <Letra letra="O" palabra={palabra} />  
      <Letra letra="P" palabra={palabra} /> 
      <Letra letra="Q" palabra={palabra} /> 
      <Letra letra="R" palabra={palabra} /> 
      <Letra letra="S" palabra={palabra} />
      <Letra letra="T" palabra={palabra} />  
      <Letra letra="U" palabra={palabra} /> 
      <Letra letra="V" palabra={palabra} /> 
      <Letra letra="W" palabra={palabra} />
       <Letra letra="X" palabra={palabra} />
      <Letra letra="Y" palabra={palabra} />  
      <Letra letra="Z" palabra={palabra} />

    </View></>
  )
}

var estadoEncontrado={ display: "block"}
var estadoNoEncontrado= {display: "none"}
