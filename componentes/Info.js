import React from 'react'
import {View, Text, Button} from 'react-native'

export default function({navigation}) {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <View style={{width: 250}}>
            <View style={{backgroundColor: '#09f', borderRadius: 10, marginBottom: 10, padding: 10}}>
            <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
                Este aplicativo foi desenvolvido por Caique Cézar apenas a título de aprendizado.
                {"\n"} O uso de componentes e/ou partes do códigos está permitido desde que com prévia autorização do autor segundo a Lei 8.251/89.
                {"\n"} Todos os direitos reservados.
                {"\n"}
            </Text>
            </View>
            <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title="voltar"
                onPress = {()=>{navigation.goBack()}} 
            />
            </View>
        </View>
        </View>
    )
}