import { router } from 'expo-router';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import estilos from '@/components/misEstilos';

export default function Modal(){
    let input ="";
    const cambiarNombre = (input:string)=>{
        alert(input);
        router.replace({pathname:"/Profile/a_perfil",params:{nombre:input}}) 
    }
      
    return(
        <View style={[estilos.centrado,estilos.mainView]}>
            <Text style={[estilos.texto,estilos.centrado]}>Soy un modal</Text>
            <TextInput style={[estilos.tarjeta1,estilos.margen, {padding:8,backgroundColor: "white",fontSize:18}]} onChangeText={cambiarNombre} value={input} placeholder='Enter new name' />
        </View>
    )
}