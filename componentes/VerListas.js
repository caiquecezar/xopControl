import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'
import TelaEditarLista from "../componentes/EditarLista.js";

let nomeLista = '';
let listaItens = [];
let todasListas = [];
let idEdit = 0;
let contador = 0;
todasListas = [
  {
    id: 1,
    nome: 'Lista 1',
    produtos: [{id: 1, nome: 'abobra', medida: 'un'},{id: 2, nome: 'carne', medida: 'kg'}]
  },
  {
    id: 2,
    nome: 'Lista 2',
    produtos: [{id: 1, nome: 'buceta', medida: 'un'},{id: 2, nome: 'cu', medida: 'kg'},{id: 2, nome: 'priquito', medida: 'cm'}]
  }
]
function addLista () {
  todasListas.push({id: ++contador, nome: nomeLista, produtos: listaItens})
}
function editLista (id) {
  todasListas[id].nome = nomeLista;
  todasListas[id].produtos = listaItens;
}

export default function({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
        <View style={{flex: 1, backgroundColor: '#09f', borderRadius: 10, padding: 10}}>
          <Text style={{fontSize: 25, marginBottom: 15, color: 'white', fontWeight:'bold', textAlign: 'center'}}>LISTAS</Text>
          <FlatList
            data={todasListas}
            keyExtractor={item=>item.id} 
            renderItem={ ({item, index}) =>
                <View>
                    <Text style={{color: 'white', fontSize: 12}}> 
                      {index} nome: {item.nome} - Quantidade de itens: {item.produtos.length} 
                      {'  '}
                      <TouchableHighlight 
                        onPress={()=>{idEdit = ""+index; navigation.navigate('TelaEditarLista')}} 
                        underlayColor='blue'
                      >
                        <Image 
                          source = {require('../assets/images/lapis.png')} 
                          style = {estilo.editar}
                        />
                      </TouchableHighlight>
                      {'  '}
                      <TouchableHighlight 
                        onPress={()=>{idEdit = ""+index; {
                          Alert.alert(
                            "AVISO",
                            "Deseja deletar a Lista?",
                            [
                              {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                              },
                              { 
                                text: "Sim", 
                                onPress: () => console.log("OK Pressed") 
                              }
                            ]
                          );
                        }}} 
                        underlayColor='red'
                      >
                        <Image 
                          source = {require('../assets/images/lixeira.png')} 
                          style = {estilo.editar}
                        />
                      </TouchableHighlight>
                    </Text>
                </View>
            }
          />
        </View>
        <View style={{margin:10}}>
          <Button 
              style={{}}
              title="voltar"
              onPress = {()=>{navigation.goBack()}} 
          />
        </View>
      </View>
    )
}
  
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
tituloTexto: {
    fontSize: 15,
    textAlign: 'left',

}
})