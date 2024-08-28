import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

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

return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Contador: {contador}.</Text>
      <Image source={image}></Image>
      <View style={styles.buttonContainer}>
      <Pressable onPress={incrementar} style={styles.button}> 
        <Text style={styles.buttonLabel}>Sumar</Text> 
      </Pressable>
      </View>
      <View style={styles.buttonContainer}>
      <Pressable onPress={reducir} style={styles.button} > 
        <Text style={styles.buttonLabel}>Restar</Text> 
      </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "blue",
    backgroundColor: "lightblue",
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row"
    
    },
    buttonLabel: {
      fontSize: 20,
      fontWeight: "600",
      
    },
     buttonContainer: {
      width: 320,
      height: 70,
      justifyContent: "center",
      alignContent: "center"
     },
     title:{
      fontSize: 30,
      fontWeight: "bold",
      padding: 20
     }
})