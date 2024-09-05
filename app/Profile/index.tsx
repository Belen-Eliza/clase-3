import ThemedButton from "@/components/ThemedButton";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from 'react-native';
import { useState } from "react";

export default function Perfil() {
  const [nombre,setNombre]=useState("James Bond");
  const estilos = StyleSheet.create({
    view: {justifyContent: "center",
        alignItems: "center", 
        alignContent: "center", 
        flex: 1,
        
        width: "100%"
        },
    margen: {
        marginBottom: "20%",
        marginTop: "20%",
    },
    texto:{
        fontSize: 20
    }
  })
  return (
    <View style={[estilos.view,estilos.margen]}>
        <Text style={[estilos.texto,estilos.margen]}>{nombre}</Text>
        {/* <Link href={"/Profile/modal"} asChild ><ThemedButton texto="Cambiar nombre" /></Link> */}
        <Link href={"/Profile/modal"}><Text>Cambiar nombre</Text></Link>
      
    </View>
  )
}


