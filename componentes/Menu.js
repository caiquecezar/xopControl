import React, {useState} from 'react'
import {View, StyleSheet, Button, BackHandler} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import TelaInfo from '../componentes/Info.js'
import TelaCadastroNome from '../componentes/CadastrarListaNome.js'
import TelaCadastroItens from '../componentes/CadastrarListaItens.js'
import TelaVerListas from '../componentes/VerListas.js'
import TelaEditarLista  from "../componentes/EditarLista.js";
import TelaSelecionarLista from './SelecionarLista.js'

export default function({navigation}) {    
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{}}>
                <Button 
                    style={{}}
                    title="iniciar"
                    onPress = {() => navigation.navigate('TelaSelecionarLista')} 
                />
                <Button   
                    style={{}}
                    title="cadastrar lista" 
                    color='#0ae'
                    onPress = {()=>navigation.navigate('TelaCadastroNome')}
                />
                <Button 
                    style={{}}
                    title="ver listas" 
                    onPress = {()=>navigation.push('TelaVerListas')}
                />
                <Button 
                    color='#0ae'
                    style={{}}
                    title="ver historico"
                />
                <Button 
                    style={{}}
                    title="info" 
                    onPress={()=>navigation.navigate('TelaInfo')}
                />
                <Button 
                    color='#0ae'
                    style={{}}
                    title="sair" 
                    onPress={()=>BackHandler.exitApp()}
                />
            </View>
        </View>
    );
}
  
  