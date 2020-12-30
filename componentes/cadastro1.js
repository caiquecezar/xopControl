import React,  {useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput} from 'react-native'

export default function () {
  const [nome,setNome] = useState('');
  return (
    <View>
      <Text>
        Nome da Lista: 
      </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'black'}}
        value = {nome}
        onChangeText={text => setNome(text)}
      />
    </View>
  )
}

