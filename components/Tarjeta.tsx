import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Tarjeta(props: { texto: string }){
    const [tema,setTema] = useState("claro");
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: tema=="claro" ? "#9fc7c5": "#486867",
            width: "80%",
            margin: 20},
        boton: {
            alignItems: "center", 
            alignContent: "center", 
        },
        texto:{
            fontSize: 20,
            color: tema=="claro" ? "black": "white"
        },
        
    });
    const cambiarColor = () => {
        setTema(prev => {
            if (prev=="claro"){
                return "oscuro"
            }
            return "claro"
        })
    }
    return(
        <View style={estilos.tarjeta}>
            <Pressable style={estilos.boton} onPress={cambiarColor}>
                <Text style={estilos.texto}>{props.texto}</Text>
            </Pressable>
        </View>
            
    )
}


export default Tarjeta;