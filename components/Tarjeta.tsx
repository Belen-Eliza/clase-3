import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

function Tarjeta(props: { texto: string }){
    const [colores,setColores] = useState({bckgr: "#9fc7c5", font: "black",tipo: 1});
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: colores.bckgr,
            width: "80%",
            margin: 20},
        boton: {
            alignItems: "center", 
            alignContent: "center", 
        },
        texto:{
            fontSize: 20,
            color: colores.font
        },
        color1:{
            backgroundColor: "#9fc7c5", 
            color: "black"
        },
        color2: {
            backgroundColor: "#486867", 
            color: "white"
        }
    });
    const cambiarColor = () => {
        setColores(prev => {
            if (prev.tipo==1){
                return {bckgr: "#486867", font: "white",tipo: 2}
            }
            return {bckgr: "#9fc7c5", font: "black",tipo: 1}
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