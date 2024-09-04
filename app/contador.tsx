import Contador from "@/components/contador";
import { Text, View } from 'react-native';

export default function Tab_contador() {
    return(
        <View style={{justifyContent: "space-between",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            marginBottom: "40%",
            marginTop: "40%"
            }}>
              <Contador/>
            </View>
    )
    
}