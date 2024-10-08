import Contador from "@/components/contador";
import { View } from 'react-native';
import estilos from "@/components/misEstilos";

export default function Tab_contador() {
    return(
      <View style={estilos.mainView2}>
        <Contador/>
      </View>
    )
    
}