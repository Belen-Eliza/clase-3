import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import estilos from "./misEstilos";
export default function Contador(){

const [contador,setContador] = useState(0);
const incrementar = ()  => {
    setContador(prev => prev +1)
}
const reducir = ()  => {
    setContador(prev => {
        if (prev==0) {
            alert("El contador no puede ser menor que 0");
            return prev
        }
        return prev -1})
}
const image = require("@/assets/images/react-logo.png")

const styles = StyleSheet.create({
     buttonContainer: {
      width: 320,
      height: 70,
      justifyContent: "center",
      alignContent: "center"
     },
}) 
return (
    <View style={estilos.centrado} >
      <Text style={estilos.titulo}>Contador: {contador}.</Text>
      <Image source={image}></Image>
      <View style={[styles.buttonContainer, estilos.margen]}>
      <Pressable onPress={incrementar} style={[estilos.centrado,estilos.tarjeta1]}> 
        <Text style={estilos.label_boton}>Sumar</Text> 
      </Pressable>
      </View>
      <View style={styles.buttonContainer}>
      <Pressable onPress={reducir} style={[estilos.centrado,estilos.tarjeta1]} > 
        <Text style={estilos.label_boton}>Restar</Text> 
      </Pressable>
      </View>
      
    </View>
  );
}