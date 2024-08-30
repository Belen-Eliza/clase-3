import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Letra(props:{letra: string}) {
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor:  "#9fc7c5",
            padding: 5,
            paddingHorizontal: 4,
            margin: 7,
            minWidth: 50
        },
        boton: {
            alignItems: "center", 
            alignContent: "center", 
        },
        texto:{
            fontSize: 20,
            color:  "black"
        },
        
    });
    
    const seleccionar = ()=>{
        alert("Presionaste la "+ props.letra);
    }
    return(
        <View style={estilos.tarjeta}>
            <Pressable style={estilos.boton} onPress={seleccionar}>
                <Text style={estilos.texto}>{props.letra}</Text>
            </Pressable>
        </View>
            
    )
}
export default Letra;