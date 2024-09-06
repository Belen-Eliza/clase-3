import { router } from 'expo-router';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Modal(){
    let input ="";
    const cambiarNombre = (input:string)=>{
        alert(input);
        router.replace({pathname:"/Profile/a_perfil",params:{nombre:input}}) 
    }
    const estilos = StyleSheet.create({
        view: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            width: "100%",
            maxHeight: "40%",
            marginTop: "10%",
            marginBottom: "20%",
            },
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            minWidth: "80%",
            maxHeight: 50,
            borderColor: "#004000",
            borderRadius: 5,
            borderWidth: 2,
            fontSize: 20
            },
        
        texto:{
            padding: 8,
            fontSize: 25,
            color:  "black",
            alignSelf: "center",
            flex: 1
          }
      })
      
    return(
        <View style={estilos.view}>
            <Text style={[estilos.texto]}>Soy un modal</Text>
            <TextInput style={estilos.tarjeta} onChangeText={cambiarNombre} value={input} placeholder='Enter new name' />
        </View>
    )
}