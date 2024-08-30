import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Tarjeta(props: { texto: string }){
    const [colores,setColores] = useState({tipo: 1});
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: colores.tipo==1 ? "#9fc7c5": "#486867",
            width: "80%",
            margin: 20},
        boton: {
            alignItems: "center", 
            alignContent: "center", 
        },
        texto:{
            fontSize: 20,
            color: colores.tipo==1 ? "black": "white",
        },
        
    });
    const cambiarColor = () => {
        setColores(prev => {
            if (prev.tipo==1){
                return {tipo: 2}
            }
            return {tipo: 1}
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