import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function () {
  return (
      <View style={{height:'75%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={estilo.mainBox}>
            <Button 
                style={estilo.geralBotoes}
                title="iniciar" 
            />
            <Button 
                style={estilo.geralBotoes}
                title="cadastrar lista" 
            />
            <Button 
                style={estilo.geralBotoes}
                title="ver listas" 
            />
            <Button 
                style={estilo.geralBotoes}
                title="ver historico"
            />
            <Button 
                style={estilo.geralBotoes}
                title="info" 
            />
            <Button 
                style={estilo.geralBotoes}
                title="sair" 
            />
        </View>
    </View>
  )
}

const estilo = StyleSheet.create({
    mainBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '70%',
    },
    geralBotoes: {
        width: '100%'
    }
})
