//IMPORTAÇÕES
import React from 'react'
import {Image} from 'react-native'
import Footer from './componentes/footer'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import TelaInfo from './componentes/Info.js'
import TelaCadastroNome from './componentes/CadastrarListaNome.js'
import TelaCadastroItens from './componentes/CadastrarListaItens'
import TelaVerListas from './componentes/VerListas'
import TelaEditarLista  from "./componentes/EditarLista";
import TelaMenu from './componentes/Menu.js'
import TelaSelecionarLista from "./componentes/SelecionarLista.js";
import TelaStart from './componentes/Start.js'
import Estilo from './componentes/Estilo.js'

const Pilha = createStackNavigator();

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
                  style={Estilo.logo}
                />
            ),
          }}
        />
        <Pilha.Screen 
          name="TelaSelecionarLista"
          component={TelaSelecionarLista}
          options = {{
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
                  style={Estilo.logo}
                />
            ),
          }}
        />
        <Pilha.Screen 
          name="TelaStart"
          component={TelaStart}
          options = {{
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
                  style={Estilo.logo}
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
                  style={Estilo.logo}
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
                  style={Estilo.logo}
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
                  style={Estilo.logo}
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
                  style={Estilo.logo}
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
                  style={Estilo.logo}
                />
            ),
          }}
        />
      </Pilha.Navigator>
      <Footer/>
    </NavigationContainer>
  )
}

/*
espress js - framework
nodemon - rodar o server
sequelize - facilita umas criações
wampserver - servidor mysqyl phpmyadmin etc 
npm install --save-dev nodemon
*/