import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Tarjeta(props: { texto: string }){
    const [isPressed,change] = useState(false);
    const estilos1 = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: isPressed ? "#486867": "#9fc7c5",
            width: "80%",
            margin: 20
           },
        boton: {
            alignItems: "center", 
            alignContent: "center", 
            width: "100%",
            
        },
        texto:{
            fontSize: 20,
            color:  isPressed ? "white": "black"
        },
        
    });
    const cambiarColor = () => {
        change(prev =>{
            return !prev
        })
    }
    return(
        <View style={estilos1.tarjeta}>
            <Pressable style={estilos1.boton} onPress={cambiarColor}>
                <Text style={estilos1.texto}>{props.texto}</Text>
            </Pressable>
        </View>
            
    )
}


export default Tarjeta;