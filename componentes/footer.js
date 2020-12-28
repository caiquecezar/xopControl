import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function () {
  return (
    <View style={estilo.mainBox}>
        <Text style={estilo.footerText}> © 2020 Malunno Project, Inc. </Text>
    </View>
  )
}

const estilo = StyleSheet.create({
    mainBox: {
        width: '100%',
    },
    footerText: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center'
    }
})

