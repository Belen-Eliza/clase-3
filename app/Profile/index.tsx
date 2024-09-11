import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable } from 'react-native';
import estilos from "@/components/misEstilos";

export default function Perfil() {
  const {nombre = "Belu"} = useLocalSearchParams();
  return (
    <View style={[estilos.centrado,estilos.mainView]}>
      <Text style={estilos.titulo}>Nombre:</Text>
      <Text style={[estilos.texto,estilos.margen]}>{nombre}</Text>
      <Link href="/Profile/modal" asChild >
        <Pressable style={estilos.tarjeta1}>
          <Text style={estilos.label_tarjeta}>Cambiar nombre</Text>
        </Pressable>
      </Link>
      
    </View>
  )
}


