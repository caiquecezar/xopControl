import React from 'react'
import {View, Text, Button} from 'react-native'
import Estilo from "./Estilo.js";

export default function({navigation}) {
    return (
        <View style={Estilo.viewMaster}>
            <View style={Estilo.viewBlueBox}>
                <Text style={Estilo.infoTexto}>
                    Este aplicativo foi desenvolvido por Caique Cézar apenas a título de aprendizado.
                    {"\n"} O uso de componentes e/ou partes do códigos está permitido desde que com prévia autorização do autor segundo a Lei 8.251/89.
                    {"\n"} Todos os direitos reservados.
                </Text>
            </View>
            <View style={Estilo.viewButton}>
                <Button
                    title="voltar"
                    onPress = {()=>{navigation.goBack()}} 
                />
            </View>
        </View>
    )
}