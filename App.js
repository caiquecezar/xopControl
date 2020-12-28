import React from 'react'
import {View} from 'react-native'
import Header from './componentes/header'
import Footer from './componentes/footer'
import Menu from './componentes/menu'

export default function () {
  return (
    <View>
      <Header />

      <Menu />
      
      <Footer />
    </View>
  )
}

