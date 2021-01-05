import React from 'react'
import {View, Text, Image, StyleSheet, Button, FlatList, Alert, TouchableHighlight} from 'react-native'
import Estilo from '../componentes/Estilo.js'
import { LoadListas } from "../componentes/BackEnd.js";

let idEdit = 0;
let todasListas = [];

async function loadData() {
  console.log("LOAD VER LISTAS");
  todasListas = await LoadListas();
}  
loadData();

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
                      onPress={()=>{
                        navigation.navigate('TelaEditarLista', {editable: todasListas[index]});
                      }} 
                      underlayColor='blue'
                    >
                      <Image 
                        source = {require('../assets/images/lapis.png')} 
                        style = {Estilo.editar}
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
                        style = {Estilo.editar}
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