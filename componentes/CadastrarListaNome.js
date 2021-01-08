import React, {useState} from 'react'
import {View, Text, Button, TextInput,  Alert} from 'react-native'
import TelaCadastroItens from '../componentes/CadastrarListaItens.js'
import {CreateNewList} from '../componentes/BackEnd.js'
import Estilo from './Estilo.js'

export default function ({navigation}) {
    const [nome,setNome] = useState('');
    return (
      <View style={Estilo.viewMaster}>
        <View style={Estilo.viewBlueBox}>
          <Text style={Estilo.tituloTexto}>
            CRIAR NOVA LISTA   
          </Text>
          <Text style={Estilo.textoSimples}>
            Nome da Lista:   
          </Text>
          <TextInput 
            style={Estilo.inputText} 
            value = {nome}
            onChangeText={text => setNome(text)}
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
                title="Próximo"
                onPress = {()=>{
                  CreateNewList(nome); 
                  setNome ('');
                  Alert.alert('AVISO', 'A lista ' + nome + ' foi criada com sucesso!');
                  navigation.navigate('TelaCadastroItens', {nome: nome})
                }}
            />
          </View>
        </View>
      </View>
    )
  }