import React, {useState} from 'react'
import {View, Text, Button, TextInput, FlatList, Alert} from 'react-native'
import {AddNewItens} from './BackEnd.js'
import Estilo from './Estilo.js'

export default function ({route, navigation}) {
    const [prod,setProd] = useState('');
    const [medida,setMedida] = useState('');
    const [itens, setItens] = useState([]);
    let id = itens.length;
    const [nomedalista, setNomedalista] = useState(route.params.nome);

    function addItem () {
      itens.push({id: ++id, nome: prod, medida: medida})
      setItens([...itens])
      setProd('');
      setMedida('');
    }
    function finalizarLista () {
      listaItens = itens;
      AddNewItens(listaItens, nomedalista);
      setProd('');
      setMedida('');
      setItens([]);
      Alert.alert('ALERTA', 'Itens inseridos com sucesso!')
      navigation.navigate('TelaMenu');
    }
    return (
      <View style={Estilo.viewMaster}>
        <View style={Estilo.viewBlueBox}>
          <Text style={Estilo.tituloTexto}>
            {nomedalista}
          </Text>
          <Text style={Estilo.tituloTexto2}>
            Adicionar item 
          </Text>
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
                    <Text style={{color: 'white'}}> Item: {item.nome} - Unidade: {item.medida}</Text>
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
                  onPress={()=> finalizarLista()}
              />
            </View>
        </View>
      </View>
    )
  }
  
  