import React from 'react'
import {View, Button, BackHandler} from 'react-native'

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
                    onPress = {()=>navigation.push('TelaVerHistorico')}
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
  
  