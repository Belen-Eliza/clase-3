import { View, Pressable, Text, StyleSheet, GestureResponderEvent } from "react-native";

function ThemedButton(props: { texto: string}){
    
    const estilos = StyleSheet.create({
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: "#9fc7c5",
            minWidth: "80%",
            maxHeight: 100,
            borderColor: "#004000",
            borderRadius: 5,
            borderWidth: 2
           },
        boton: {
            alignItems: "center", 
            alignContent: "center", 
            justifyContent: "center",
            width: "100%",
            height: "100%",
        },
        texto:{
            padding: 8,
            fontSize: 25,
            color:  "black"
        },
        
    });
    
    return(
        <View style={estilos.tarjeta}>
            <Pressable style={estilos.boton} >
                <Text style={estilos.texto}>{props.texto}</Text>
            </Pressable>
        </View>
            
    )
}


export default ThemedButton;