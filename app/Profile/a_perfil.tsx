import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import estilos from "@/components/misEstilos";

export default function Perfil() {
  const params = useLocalSearchParams();
  /* const estilos = StyleSheet.create({
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
  }) */
  return (
    <View style={[estilos.centrado,estilos.mainView]}>
      <Text style={estilos.titulo}>Nombre:</Text>
      <Text style={[estilos.texto,estilos.margen]}>{params.nombre}</Text>
      <Link href="/Profile/modal" asChild >
        <Pressable style={estilos.tarjeta1}>
          <Text style={[estilos.label_boton,{paddingTop: 22}]}>Cambiar nombre</Text>
        </Pressable>
      </Link>
      
    </View>
  )
}


