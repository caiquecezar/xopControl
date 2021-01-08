import React, {useState} from 'react'
import {View, Text, Image, Button, FlatList, Alert, TouchableHighlight} from 'react-native'
import Estilo from '../componentes/Estilo.js'
import { LoadListas, DeleteList } from "../componentes/BackEnd.js";
import { useEffect } from 'react/cjs/react.development';

export default function({navigation}) {
  const [todasListas, setTodasListas] = useState([]);
  async function loadData() {
    console.log("VerListas.loadData");
    let l = [];
    l = [];
    l = await LoadListas();
    setTodasListas(l);
  }  
  useEffect(()=>{
    loadData();
  },[]);
  return ( 
    <View style={Estilo.viewMaster}>
      <View style={Estilo.viewFlatList}>
        <Text style={Estilo.tituloTexto}>ESCOLHA UMA LISTA</Text>
        <FlatList
          data={todasListas}
          keyExtractor={item=>item.id.toString()} 
          renderItem={ ({item, index}) =>
              <View style={Estilo.start}>
                  <Text style={Estilo.infoTexto}> 
                    {item.nome} - {item.produtos.length} itens {'  '}
                    </Text>
                    <TouchableHighlight 
                      onPress={()=>{
                        navigation.navigate('TelaStart', {currentList: todasListas[index]});
                      }} 
                      underlayColor='green'
                    >
                      <Image 
                        source = {require('../assets/images/next.png')} 
                        style = {Estilo.next}
                      />
                    </TouchableHighlight>

              </View>
          }
        />
      </View>
      <View style={Estilo.Button}>
        <Button 
            style={{}}
            title="voltar"
            onPress = {()=>{navigation.goBack()}} 
        />
      </View>
    </View>
  )
}