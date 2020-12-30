import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

export default function () {
    
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={estilo.mainBox}>
                <Button 
                    style={estilo.geralBotoes}
                    title="iniciar" 
                />
                <Button 
                    style={estilo.geralBotoes}
                    title="cadastrar lista" 
                    onPress = {()=>navigation.navigate('TelaCadastro1')}
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
    );
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
