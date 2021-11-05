import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export const TermsCondition = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.topCutButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <Icon name="close" size={40} color="#8C8BA5" />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#8C8BA5', fontSize: 24 }}>TERMS OF USE</Text>
          <Text style={{ color: '#8C8BA5', fontSize: 16 }}>
            Last Update: June 11, 2021
          </Text>
          <Text style={{ color: '#fff', fontSize: 14, marginTop: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            metus vitae nunc suscipit fermentum in id nisl. Vestibulum ac risus
            quis justo volutpat auctor ut aliquet libero. Donec enim tortor,
            vehicula sed molestie non, cursus pellentesque eros. Mauris vitae
            nisi tellus. Donec eu diam ac libero cursus efficitur quis a nunc.
            Nunc consequat facilisis turpis, nec pellentesque nunc eleifend at.
            Donec nunc quam, finibus viverra est a, ultrices fringilla diam.
          </Text>
          <Text style={{ color: '#E39684', fontSize: 18, marginTop: 20 }}>
            What information we collect {'\n'}and maintain about you
          </Text>
          <Text style={{ color: '#fff', fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            metus vitae nunc suscipit fermentum in id nisl. Vestibulum ac risus
            quis justo volutpat auctor ut aliquet libero. Donec enim tortor,
            vehicula sed molestie non, cursus pellentesque eros. Mauris vitae
            nisi tellus. Donec eu diam ac libero cursus efficitur quis a nunc.
            Nunc consequat facilisis turpis, nec pellentesque nunc eleifend at.
            Donec nunc quam, finibus viverra est a, ultrices fringilla diam.
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#49485F'
  },
  topCutButton: {
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 20
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 60
  }
})
