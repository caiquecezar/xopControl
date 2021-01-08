import React, { useEffect, useState } from 'react'
import {View, Text, Button, FlatList, Alert} from 'react-native'
import Estilo from '../componentes/Estilo.js'
import {LoadCompras} from './BackEnd.js'

const a = [1,2,3,4,5];

export default function({route, navigation}) {
    const lista = route.params.currentList;
    const [mapeamento,setMapeamento] = useState([]);

    async function loadCompras() {
        console.log('Historico.loadCompras');
        let c = [];
        let mapa = [];
        c = await LoadCompras (lista.id);
        console.log(c)
        for (i = 0; i<lista.produtos.length;i++) {
            mapa = [];
            let cont = 0;
            for (j = 0; j < c.length; j ++) {
                if (lista.produtos[i].id == c[j].produtoId) {
                    mapa.push({id: cont, preco: c[j].preco});
                    cont++;
                }
            }
            mapeamento.push(mapa);
            setMapeamento([...mapeamento]);
        }
        console.log(mapeamento)
    }

    useEffect(()=>{
        loadCompras();
    },[]);
    

    return ( 
        <View style={Estilo.viewMaster}>
        <View style={Estilo.viewFlatList}>
            <Text style={Estilo.tituloTexto}>{lista.nome}</Text>
            <FlatList
            data={lista.produtos}
            keyExtractor={item=>item.id.toString()} 
            renderItem={ ({item, index}) =>
                <View style={Estilo.viewHistorico}>
                    <Text style={Estilo.textoHistorico}> 
                        {item.nome}({item.medida}) 
                    </Text>
                    <FlatList
                        horizontal={true}
                        data={mapeamento[index]}
                        keyExtractor={item=>item.id.toString()} 
                        renderItem={ ({item}) =>
                            <View style={{borderWidth: 1, margin: 5, borderColor: 'white', padding: 3}}>
                                <Text style={Estilo.textoHistorico}> 
                                    R$ {item.preco}
                                </Text>
                            </View>
                        }
                    />
                </View>
            }
            />
        </View>
        <View style={Estilo.viewButton} >
            <Button 
                style={{}}
                title="voltar"
                onPress = {()=>{navigation.goBack()}} 
            />
        </View>
        </View>
    )
}