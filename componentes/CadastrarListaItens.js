import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'

export default function ({navigation}) {
    const [prod,setProd] = useState('');
    const [medida,setMedida] = useState('');
    const [itens, setItens] = useState([]);
    let id = itens.length;
    function addItem () {
      itens.push({id: ++id, nome: prod, medida: medida})
      setItens([...itens])
      setProd('');
      setMedida('');
    }
    function finalizarLista () {
      listaItens = itens;
      addLista();
      setProd('');
      setMedida('');
      setItens([]);
      navigation.navigate('TelaMenu');
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
        <View style={{backgroundColor: '#09f', borderRadius: 10, marginBottom: 10, padding: 10}}>
          <Text style={{fontSize: 25, marginBottom: 15, color: 'white', fontWeight:'bold'}}>
            {nomeLista}
          </Text>
          <Text style={{fontSize: 17, color: 'white'}}>
            Adicionar item 
          </Text>
          <Text style={{fontSize: 15, color: 'white'}}>
            Nome do item: 
          </Text>
          <TextInput 
            style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250}} 
            value = {prod}
            onChangeText={text => setProd(text)}
          />
          <Text style={{fontSize: 15, color: 'white'}}>
            Unidade de medida: 
          </Text>
          <TextInput 
            style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250, marginBottom: 5}} 
            value = {medida}
            onChangeText={text => setMedida(text)}
          />
          <Button 
              style={{}}
              title="Adicionar"
              onPress={() => addItem()}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: '#09f', borderRadius: 10, marginBottom: 5, padding: 10}}>
          
          <Text style={{fontSize: 17, color: 'white', width: 250, textAlign: 'center', fontWeight: 'bold'}}>LISTA</Text>   
         
          <FlatList
            data={itens}
            keyExtractor={item=>item.id} 
            renderItem={ ({item}) =>
                <View style={{width: '100%'}}>
                    <Text style={{color: 'white'}}> Item: {item.nome} - Unidade: {item.medida}</Text>
                </View>
            }
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{margin: 10}} >
              <Button 
                style={{}}
                title="voltar"
                onPress = {()=>{navigation.goBack()}} 
              />
            </View>
            <View style={{margin: 10}} >
              <Button 
                  style={{}}
                  title="Finalizar"
                  onPress={()=> finalizarLista()}
              />
            </View>
        </View>
      </View>
    )
  }
  
  