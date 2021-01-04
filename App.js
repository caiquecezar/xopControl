//IMPORTAÇÕES
import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, TextInput, FlatList, BackHandler, Alert, TouchableHighlight} from 'react-native'
import Footer from './componentes/footer'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import TelaInfo from './componentes/Info.js'
import TelaCadastroNome from './componentes/CadastrarListaNome.js'
import TelaCadastroItens from './componentes/CadastrarListaItens'
import TelaVerListas from './componentes/VerListas'
import TelaEditarLista  from "./componentes/EditarLista";
import TelaMenu from './componentes/Menu.js'

//BACKEND
//Criar nova lista
async function createNewList() {
  let response=await fetch('http://10.0.2.2:3000/createNewList', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nomeLista: nomeLista,
    })
  });
  let json=await response.json();
  console.log(json);
}

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
          name="TelaCadastroNome"
          component={TelaCadastroNome}
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
          name="TelaCadastroItens"
          component={TelaCadastroItens}
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
  },
  tituloTexto: {
    fontSize: 15,
    textAlign: 'left',

  }
})
/*
espress js - framework
nodemon - rodar o server
sequelize - facilita umas criações
wampserver - servidor mysqyl phpmyadmin etc 
npm install --save-dev nodemon
*/