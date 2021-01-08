import React, {useState, useEffect} from 'react'
import {View, Text, Button, TextInput, FlatList} from 'react-native'
import { UpdateList } from '../componentes/BackEnd.js'
import Estilo from "./Estilo.js";
export default function ({route, navigation}) {
  let editable = route.params.editable;
  //console.log("Editable"); console.log(editable);
  
  const [prod,setProd] = useState('');
  const [medida,setMedida] = useState('');
  const [itens, setItens] = useState(editable.produtos);
  const [nomeListaEdit, setNomeListEdit] = useState(editable.nome);
  const [id, setId] = useState(route.params.maxId+1);  
  
  /*useEffect(()=>{
    console.log("Editable"); console.log(editable);
    setId(route.params.maxId+1); //ta vindo 1 a menos wtf
    setItens(editable.produtos); 
    setNomeListEdit(editable.nome); 
  },[]);  */
  
  function addItem () {
    setId(id+1);
    itens.push({id: id, nome: prod, medida: medida})
    setItens([...itens])
    setProd('');
    setMedida('');
  }
  
  function finalizarEdicao () {
    editable.nome = nomeListaEdit;
    editable.produtos = itens;
    console.log(editable.produtos)
    UpdateList(editable);
    //console.log("Editable FINAL"); console.log(editable);
    
    setProd('');
    setMedida('');
    setItens([]);
    navigation.navigate('TelaMenu');
  }
  
  return (
    <View style={Estilo.viewMaster}>
      <View style={Estilo.viewBlueBox}>
        
        <TextInput 
          style={Estilo.titleInputText}
          textAlign='center'
          value = {nomeListaEdit}
          onChangeText={text => setNomeListEdit(text)}
        />
        <Text style={Estilo.textoSimples}>
          Nome do item: 
        </Text>
        <TextInput 
          style={Estilo.inputText} 
          value = {prod}
          onChangeText={text => setProd(text)}
        />
        <Text style={Estilo.textoSimples}>
          Unidade de medida: 
        </Text>
        <TextInput 
          style={Estilo.inputText} 
          value = {medida}
          onChangeText={text => setMedida(text)}
        />
        <Button 
            style={{}}
            title="Adicionar"
            onPress={() => addItem()}
        />
      </View>
      <View style={Estilo.viewFlatList}>
        <Text style={Estilo.tituloTexto2}>LISTA</Text>
        <FlatList
          data={itens}
          keyExtractor={item=>item.id.toString()} 
          renderItem={ ({item}) =>
            <View>
              <Text style={Estilo.textoSimples}> 
                Item: {item.nome} - Unidade: {item.medida}
              </Text>
            </View>
          }
        />
      </View>
      <View style={Estilo.viewButtonsRow}>
        <View style={Estilo.viewButton} >
          <Button 
              style={{}}
              title="voltar"
              onPress = {()=>{navigation.goBack()}} 
          />
        </View>
        <View style={Estilo.viewButton} >
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