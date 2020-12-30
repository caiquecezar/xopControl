import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler} from 'react-native'
import Footer from './componentes/footer'
//import TelaMenu from './componentes/menu'
//import TelaCadastro1 from './componentes/cadastro1'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";


const Pilha = createStackNavigator();

function TelaMenu ({navigation}) {    
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
                  onPress={()=>BackHandler.exitApp()}
              />
          </View>
      </View>
  );
}


function TelaCadastro1 ({navigation}) {
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
      <Button 
          style={estilo.geralBotoes}
          title="Próximo"
          onPress = {()=>{navigation.navigate('TelaCadastro2')}} 
      />
      <Button 
          style={estilo.geralBotoes}
          title="voltar"
          onPress = {()=>{navigation.goBack()}} 
      />
    </View>
  )
}

function TelaCadastro2 ({navigation}) {
  const [prod,setProd] = useState('');
  const [medida,setMedida] = useState('');
  const [itens, setItens] = useState([]);
  let id = itens.length;
  function addItem () {
    itens.push({id: ++id, nome: prod, medida: medida})
    setItens([...itens])
    setProd('');
    setMedida('');
  }
  return (
    <View>
      <Text>
        NOME DA LISTA
      </Text>
      <Text>
        Nome do item: 
      </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'black'}}
        value = {prod}
        onChangeText={text => setProd(text)}
      />
      <Text>
        Unidade de medida: 
      </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'black'}}
        value = {medida}
        onChangeText={text => setMedida(text)}
      />
      <Button 
          style={estilo.geralBotoes}
          title="Adicionar"
          onPress={() => addItem()}
      />
      <Text>LISTA</Text>
      <FlatList
        data={itens}
        keyExtractor={item=>item.id} 
        renderItem={ ({item}) =>
            <View>
                <Text> Item: {item.nome} - Unidade: {item.medida}</Text>
            </View>
        }
      />
      <Button 
          style={estilo.geralBotoes}
          title="Finalizar"
      />
      <Button 
          style={estilo.geralBotoes}
          title="voltar"
          onPress = {()=>{navigation.goBack()}} 
      />
    </View>
  )
}


export default function () {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="TelaMenu"
          component={TelaMenu}
          options={{
            title: "Menu",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: ()=>(
                <Image 
                  source={require('./assets/images/carrinho-de-compras.png')}
                  style={estilo.logo}
                />
            ),
          }}
        />
        <Pilha.Screen
          name="TelaCadastro1"
          component={TelaCadastro1}
          options={{
            title: "Cadastro",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: ()=>(
                <Image 
                  source={require('./assets/images/carrinho-de-compras.png')}
                  style={estilo.logo}
                />
            ),
          }}
        />
        <Pilha.Screen
          name="TelaCadastro2"
          component={TelaCadastro2}
          options={{
            title: "Cadastro",
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: ()=>(
                <Image 
                  source={require('./assets/images/carrinho-de-compras.png')}
                  style={estilo.logo}
                />
            ),
          }}
        />
      </Pilha.Navigator>
      <Footer/>
    </NavigationContainer>
  )
}

const estilo = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    margin: 15,
  }
})
