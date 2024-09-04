import ThemedButton from "@/components/ThemedButton";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from 'react-native';
import { useState } from "react";

export default function Perfil() {

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
        <Text style={[estilos.texto,estilos.margen]}>Nombre Apellido</Text>
        <Link href={"/"} ><ThemedButton texto="Cambiar nombre" /></Link>
      
    </View>
  )
}


