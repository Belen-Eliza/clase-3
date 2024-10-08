import { router } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import estilos from '@/components/misEstilos';
import { useState } from 'react';

export default function Modal(){
    
    const [nuevoNombre, setNombre] = useState("");
    const cambiarNombre = (input:string)=>{
        setNombre(input);        
    }
    const enter = ()=>{
        router.navigate({pathname:"/Profile/",params:{nombre:nuevoNombre}}) 
    }
      
    return(
        <View style={[estilos.centrado,estilos.mainView]}>
            <Text style={[estilos.texto,estilos.centrado]}>Soy un modal</Text>
            <TextInput style={[estilos.tarjeta1,estilos.margen, {padding:8,backgroundColor: "white",fontSize:18}]} onChangeText={cambiarNombre} value={nuevoNombre} placeholder='Enter new name' />
            <TouchableHighlight underlayColor="#80ffff" style= {estilos.tarjeta1} onPress={enter}><Text style={estilos.label_tarjeta}>Guardar</Text></TouchableHighlight>
        </View>
    )
}