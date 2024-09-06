import { StyleSheet} from 'react-native';


const estilos= StyleSheet.create({
    centrado: {
        justifyContent: "center",
        alignItems: "center", 
        alignContent: "center", 
    },
    titulo: {
        padding: 15,
        fontSize: 30,
        fontWeight: "bold",
        color:  "black",
    },
    texto: {
        fontSize: 25,
        padding: 8
    },
    mainView: {
        flex: 1,
        width: "100%",
        marginTop: "20%",
        marginBottom: "20%"
    },
    mainView2: {
        justifyContent: "space-between",
        alignItems: "center", 
        alignContent: "center", 
        flex: 1,
        marginBottom: "40%",
        marginTop: "40%"
    },
    tarjeta1: {
        minWidth: "80%",
        maxHeight: 80,
        borderColor: "#0538cf",
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: "lightblue",
        flex: 1,
        
    },
    
    label_boton: {
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center",        
    },
    label_tarjeta:{
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center", 
        paddingTop:22
    },
    margen: {
        margin: "10%"
    }
})
export default estilos;


/* 
*modal:
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
      *perfil:
  view: {justifyContent: "center",
        alignItems: "center", 
        alignContent: "center", 
        flex: 1,
        width: "100%"
        },
    margen: {
        marginBottom: "20%",
        marginTop: "20%",
    },
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
    
    texto:{
        padding: 8,
        fontSize: 25,
        color:  "black",
        alignSelf: "center"
      }
*index:
      <View style={{justifyContent: "space-between",
    alignItems: "center", 
    alignContent: "center", 
    flex: 1,
    marginBottom: "40%",
    marginTop: "40%"
    }}>

* contador
     button: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "blue",
    backgroundColor: "lightblue",
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row"
    
    },
    buttonLabel: {
      fontSize: 20,
      fontWeight: "600",
      
    },
     buttonContainer: {
      width: 320,
      height: 70,
      justifyContent: "center",
      alignContent: "center"
     },
     title:{
      fontSize: 30,
      fontWeight: "bold",
      padding: 20
     }

*tarjeta:
    
        tarjeta: {justifyContent: "center",
            alignItems: "center", 
            alignContent: "center", 
            flex: 1,
            backgroundColor: tema=="claro" ? "#9fc7c5": "#486867",
            width: "80%",
            margin: 20
           },
        boton: {
            alignItems: "center", 
            alignContent: "center", 
            width: "100%",
            
        },
        texto:{
            fontSize: 20,
            color: tema=="claro" ? "black": "white"
        },
        


  */

