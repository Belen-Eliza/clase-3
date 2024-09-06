import { Link, router, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState } from "react";

export default function Perfil() {
  /* const [nombre,setNombre]=useState("James Bond"); */
  const params = useLocalSearchParams();
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
    tarjeta: {justifyContent: "center",
        alignItems: "center", 
        alignContent: "center", 
        flex: 1,
        backgroundColor: "#9fc7c5",
        minWidth: "80%",
        maxHeight: 100,
        borderColor: "#004000",
        borderRadius: 5,
        borderWidth: 2
        },
    
    texto:{
        padding: 8,
        fontSize: 25,
        color:  "black",
        alignSelf: "center"
      }
  })
  return (
    <View style={[estilos.view,estilos.margen]}>
      <Text style={[estilos.texto,{fontSize:30,fontWeight: "bold"}]}>Nombre:</Text>
      <Text style={[estilos.texto,estilos.margen]}>{params.nombre}</Text>
      <Link href="/Profile/modal" asChild>
        <Pressable style={estilos.tarjeta}>
          <Text style={estilos.texto}>Cambiar nombre</Text>
        </Pressable>
      </Link>
      
    </View>
  )
}


