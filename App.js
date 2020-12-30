//IMPORTAÇÕES
import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'
import Footer from './componentes/footer'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

//VARIAVEIS
const Pilha = createStackNavigator();
let nomeLista = '';
let listaItens = [];
let todasListas = [];
let idEdit = 0;
let contador = 0;
todasListas = [
  {
    id: 1,
    nome: 'Lista 1',
    produtos: [{id: 1, nome: 'abobra', medida: 'un'},{id: 2, nome: 'carne', medida: 'kg'}]
  },
  {
    id: 2,
    nome: 'Lista 2',
    produtos: [{id: 1, nome: 'buceta', medida: 'un'},{id: 2, nome: 'cu', medida: 'kg'},{id: 2, nome: 'priquito', medida: 'cm'}]
  }
]
function addLista () {
  todasListas.push({id: ++contador, nome: nomeLista, produtos: listaItens})
}
function editLista (id) {
  todasListas[id].nome = nomeLista;
  todasListas[id].produtos = listaItens;
}

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
                  onPress = {()=>navigation.navigate('TelaVerListas')}
              />
              <Button 
                  style={estilo.geralBotoes}
                  title="ver historico"
              />
              <Button 
                  style={estilo.geralBotoes}
                  title="info" 
                  onPress={()=>navigation.navigate('TelaInfo')}
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
          onPress = {()=>{nomeLista = nome; setNome(''); navigation.navigate('TelaCadastro2')}} 
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
  function finalizarLista () {
    listaItens = itens;
    addLista();
    setProd('');
    setMedida('');
    setItens([]);
    navigation.navigate('TelaMenu');
  }
  return (
    <View>
      <Text>
        NOME DA LISTA: {nomeLista}
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
          onPress={()=> finalizarLista()}
      />
      <Button 
          style={estilo.geralBotoes}
          title="voltar"
          onPress = {()=>{navigation.goBack()}} 
      />
    </View>
  )
}

function TelaInfo({navigation}) {
  return (
    <View>
      <Text>
        Este aplicativo foi desenvolvido por Caique Cézar apenas a título de aprendizado.
        {"\n"}O uso de componentes e/ou partes do códigos está permitido desde que com prévia autorização do autor segundo a Lei 8.251/89.
        {"\n"}Todos os direitos reservados.
      </Text>
      <Button 
          style={estilo.geralBotoes}
          title="voltar"
          onPress = {()=>{navigation.goBack()}} 
      />
    </View>
  )
}

function TelaVerListas({navigation}) {
  return (
    <View>
      <Text>LISTAS</Text>
      <FlatList
        data={todasListas}
        keyExtractor={item=>item.id} 
        renderItem={ ({item, index}) =>
            <View>
                <Text> 
                  {index} nome: {item.nome} - Quantidade de itens: {item.produtos.length} 
                  <TouchableHighlight 
                    onPress={()=>{idEdit = ""+index; navigation.navigate('TelaEditarLista')}} 
                    underlayColor='red'
                  >
                    <Image 
                      source = {require('./assets/images/edit.png')} 
                      style = {estilo.editar}
                    />
                  </TouchableHighlight>
                </Text>
            </View>
        }
      />
      <Button 
          style={estilo.geralBotoes}
          title="voltar"
          onPress = {()=>{navigation.goBack()}} 
      />
    </View>
  )
}

function TelaEditarLista ({navigation}) {

  const [prod,setProd] = useState('');
  const [medida,setMedida] = useState('');
  const [itens, setItens] = useState(todasListas[idEdit].produtos);
  const [nomeListaEdit, setNomeListEdit] = useState(todasListas[idEdit].nome);
  let id = itens.length;
  function addItem () {
    itens.push({id: ++id, nome: prod, medida: medida})
    setItens([...itens])
    setProd('');
    setMedida('');
  }
  function finalizarEdicao () {
    nomeLista = nomeListaEdit;
    listaItens = itens;
    editLista(idEdit);
    setProd('');
    setMedida('');
    setItens([]);
    navigation.navigate('TelaMenu');
  }
  return (
    <View>
      <Text>
        LISTA
      </Text>
      <TextInput 
        style={{borderWidth: 1, borderColor: 'black'}}
        value = {nomeListaEdit}
        onChangeText={text => setNomeListEdit(text)}
      />
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
          onPress={()=> finalizarEdicao()}
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
            title: "Shop Analyzer",
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
        <Pilha.Screen
          name="TelaInfo"
          component={TelaInfo}
          options={{
            title: "Informações",
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
          name="TelaVerListas"
          component={TelaVerListas}
          options={{
            title: "Todas as Listas",
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
          name="TelaEditarLista"
          component={TelaEditarLista}
          options={{
            title: "Editar Lista",
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
  },
  editar: {
    width: 20,
    height: 20,
    margin: 5,
  }
})
/*
espress js
sequelize
wampserver
npm install --save-dev nodemon
*/