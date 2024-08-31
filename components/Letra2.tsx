import { View, Text, StyleSheet } from "react-native";

function Letra2(props:{letra: string,estado:any}) {
    let l: string = props.letra.toLowerCase();
    let e = props.estado.map((each: string)=>each.toLowerCase())
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor:  "white",
            padding: 5,
            minWidth: 20,
            maxWidth: 50,
            minHeight: 35,
            borderBottomWidth: 3,
            borderColor: "black"
        },
        
        texto:{
            fontSize: 20,
            color:  "black",
            display: e.includes(l) ? "flex" : "none"
        },
        
    });
    
    return(
        <View style={estilos.tarjeta}>
                <Text style={estilos.texto}>{props.letra}</Text>
        </View>
            
    )
}
export default Letra2;