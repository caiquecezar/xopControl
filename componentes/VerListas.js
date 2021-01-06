import React, {useState} from 'react'
import {View, Text, Image, Button, FlatList, Alert, TouchableHighlight} from 'react-native'
import Estilo from '../componentes/Estilo.js'
import { LoadListas, DeleteList } from "../componentes/BackEnd.js";
import { useEffect } from 'react/cjs/react.development';

export default function({navigation}) {
  const [todasListas, setTodasListas] = useState([]);
  async function loadData() {
    let l = [];
    console.log("LOAD VER LISTAS");
    l = [];
    l = await LoadListas();
    setTodasListas(l);
  }  
  useEffect(()=>{
    loadData();
  },[]);

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
                        let maxId = 0;
                        for(i=0;i<todasListas.length;i++)
                          for(j=0;j<todasListas[i].produtos.length;j++) 
                            if(todasListas[i].produtos[j].id > maxId) 
                              maxId = todasListas[i].produtos[j].id;
                        console.log(maxId);
                        navigation.navigate('TelaEditarLista', {editable: todasListas[index], maxId: maxId});
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
                      onPress={()=>{{
                        Alert.alert(
                          "AVISO",
                          "Deseja deletar a Lista?" ,
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel"
                            },
                            { 
                              text: "Sim", 
                              onPress: () => {console.log("OK Pressed"); DeleteList(todasListas[index].id); loadData()}
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