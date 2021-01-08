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
        <Text style={Estilo.tituloTexto}>LISTAS</Text>
        <FlatList
          data={todasListas}
          keyExtractor={item=>item.id.toString()} 
          renderItem={ ({item, index}) =>
              <View>
                  <Text style={Estilo.textoSimples}> 
                    {item.nome} - {item.produtos.length} itens {'  '}
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
                          "Deseja deletar a lista " + todasListas[index].nome + "?" ,
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