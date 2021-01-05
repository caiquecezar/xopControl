import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'


export default function ({route, navigation}) {
    let editable = route.params.editable;
    console.log(editable);

    const [prod,setProd] = useState('');
    const [medida,setMedida] = useState('');
    const [itens, setItens] = useState(editable.produtos);
    const [nomeListaEdit, setNomeListEdit] = useState(editable.nome);
    
    let id = itens.length;
    
    function addItem () {
      itens.push({id: ++id, nome: prod, medida: medida})
      setItens([...itens])
      setProd('');
      setMedida('');
    }
    
    function finalizarEdicao () {  
      setProd('');
      setMedida('');
      setItens([]);
      navigation.navigate('TelaMenu');
    }
    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
        <View style={{backgroundColor: '#09f', borderRadius: 10, padding: 10, marginBottom: 10}}>
          <Text style={{fontSize: 25, marginBottom: 15, color: 'white', fontWeight:'bold', textAlign: 'center'}}>
            LISTA
          </Text>
          <TextInput 
            style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250}} 
            value = {nomeListaEdit}
            onChangeText={text => setNomeListEdit(text)}
          />
          <Text style={{color: 'white'}}>
            Nome do item: 
          </Text>
          <TextInput 
            style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250}} 
            value = {prod}
            onChangeText={text => setProd(text)}
          />
          <Text style={{color: 'white'}}>
            Unidade de medida: 
          </Text>
          <TextInput 
            style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250}} 
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
                <View>
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
                onPress={()=> finalizarEdicao()}
            />
          </View>
        </View>
      </View>
    )
  }