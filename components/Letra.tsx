import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

var estadoNoSeleccionado= {
    bckgr: "#9fc7c5",
    color: "black"
}
var estadoLetraCorrecta={
    bckgr: "#009c5a",
    color: "white"
}
var estadoLetraIncorrecta={
    bckgr: "#b10d24",
    color: "white"
}

function Letra(props:{letra: string, palabra: string}) {
    const [estado,cambiarEstado] = useState(estadoNoSeleccionado)
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor:  estado.bckgr,
            padding: 5,
            paddingHorizontal: 4,
            margin: 7,
            minWidth: 50,
            },
        boton: {
            alignItems: "center", 
            alignContent: "center", 
        },
        texto:{
            fontSize: 20,
            color:  estado.color
        },
        
    });
    
    const seleccionar = ()=>{
        let l =props.letra.toLowerCase();
        let p = props.palabra.toLowerCase();
        if (p.includes(l)) {
            cambiarEstado(()=>estadoLetraCorrecta);
            alert("La palabra incluye la "+ props.letra );
            //descubiertas.push(l);
        } else{
            alert("La palabra no incluye la "+ props.letra);
            cambiarEstado(()=>estadoLetraIncorrecta);
        }
        
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
var estadoEncontrado= {
    display: "block"
  }