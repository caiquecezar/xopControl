import React, {useState} from 'react'
import {View, Text, Button, FlatList, TextInput} from 'react-native'
import MoneyInput from 'react-native-money-input'
import Estilo from '../componentes/Estilo.js'
import {BuyItens} from './BackEnd.js'
import { useEffect } from 'react/cjs/react.development';

export default function({route, navigation}) {
    const lista = route.params.currentList;
    const [state, setState] = useState({
        textInputs: [],
    });

    
    return ( 
        <View style={Estilo.viewMaster}>
        <View style={Estilo.viewFlatList}>
            <Text style={Estilo.tituloTexto}>{lista.nome}</Text>
            <FlatList
            data={lista.produtos}
            keyExtractor={item=>item.id.toString()} 
            renderItem={ ({item, index}) =>
                <View style={Estilo.viewStartFlat}>
                    <Text style={Estilo.textoStart}> 
                        {item.nome} - {item.medida} 
                        {'  '}
                    </Text>
                    <MoneyInput 
                        style={Estilo.inputMoney}
                        textAlign='center'
                        onChangeText={text => {
                            let { textInputs } = state;
                            textInputs[index] = text;
                            setState({
                                textInputs,
                            });
                        }}
                        value = {state.textInputs[index]}
                    />
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
                onPress={()=>{
                    BuyItens(lista.id, lista.produtos, state.textInputs);
                    navigation.navigate('TelaMenu');
                }}
            />
            </View>
        </View>
        </View>
    )
}