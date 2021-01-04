import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'
import TelaCadastroItens from '../componentes/CadastrarListaItens.js'

export default function ({navigation}) {
    const [nome,setNome] = useState('');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <View style={{backgroundColor: '#09f', borderRadius: 10, marginBottom: 10, padding: 10}}>
            <Text style={{fontSize: 25, marginBottom: 30, color: 'white', fontWeight:'bold'}}>
              CRIAR NOVA LISTA   
            </Text>
            <View style={{ marginBottom: 20}}>
              <Text style={{fontSize: 15, color: 'white'}}>
                Nome da Lista:   
              </Text>
              <TextInput 
                style={{borderWidth: 1, borderColor: 'white', color: 'white', width: 250}} 
                value = {nome}
                onChangeText={text => setNome(text)}
              />
            </View>
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
                  title="Próximo"
                  onPress = {()=>{nomeLista = nome; setNome(''); /*createNewList();*/ navigation.navigate('TelaCadastroItens')}} 
              />
            </View>
          </View>
        </View>
      </View>
    )
  }