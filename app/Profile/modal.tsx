import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Modal(){
    const cambiarNombre = ()=>{}
    return(
        <View>
            <Text>Soy un modal</Text>
            <TextInput onTextInput={cambiarNombre} placeholder='Enter new name' />
        </View>
    )
}