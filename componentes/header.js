import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default function () {
  return (
    <View style={estilo.mainBox}>
      <Text style={estilo.logoText}>
        ShopControl
        <Image 
            source={require('../assets/images/carrinho-de-compras.png')}
            style={estilo.logoImage}
        />
      </Text>
    </View>
  )
}

const estilo = StyleSheet.create({
    mainBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00f',
        paddingBottom: 5,
    },
    logoImage: {
        height: 35,
        width: 50
    },
    logoText: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})
