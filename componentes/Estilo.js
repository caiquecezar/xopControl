import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    logo: {
      width: 40,
      height: 40,
      margin: 15,
    },
    editar: {
      width: 20,
      height: 20,
    },
    next: {
      width: 30,
      height: 30,
    },
    start: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tituloTexto: {
      textAlign:'center', 
      fontSize: 25, 
      marginBottom: 15, 
      color: 'white', 
      fontWeight:'bold',
    },
    tituloTexto2: {
      fontSize: 17, 
      color: 'white', 
      width: 250, 
      textAlign: 'center', 
      fontWeight: 'bold',
    },
    infoTexto: {
      fontSize: 15, 
      textAlign: 'center', 
      color: 'white',
    },
    viewMaster: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      margin: 5,
    },
    viewBlueBox: {
      backgroundColor: '#09f', 
      borderRadius: 10,
      padding: 10,
      margin: 5,
    },
    viewFlatList: {
      flex: 1,
      backgroundColor: '#09f', 
      borderRadius: 10, 
      marginBottom: 5, 
      padding: 10,
    },
    inputText: {
      borderWidth: 1, 
      borderColor: 'white', 
      color: 'white', 
      width: 250,
    },
    titleInputText: {
      borderWidth: 1, 
      borderColor: 'white', 
      color: 'white', 
      width: 250,
      fontSize: 20,
      fontWeight: 'bold',
    },
    viewButtonsRow: {
      flexDirection: 'row', 
      justifyContent: 'center',
    },
    viewButton: {
      margin: 10,
    },
    textoSimples: {
      fontSize: 15,
      color: 'white',
    },
    viewStartFlat: {
      flexDirection: 'row',  
      alignItems: 'center', 
      justifyContent: 'center', 
      margin: 5,
    },
    inputMoney: {
      fontWeight: 'bold',
      fontSize: 18,
      borderWidth: 1, 
      borderColor: 'white', 
      color: 'white', 
      width: 65,
      borderRadius: 10,
    },
    textoStart: {
      fontSize: 20,
      color: 'white',
      width: 225,
    },
    viewHistorico: {
      flexDirection: 'row',  
      alignItems: 'center', 
      justifyContent: 'center', 
      margin: 5,
    },
    textoHistorico: {
      fontSize: 15, 
      textAlign: 'center', 
      color: 'white',
    }
  })

export default estilo;