import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export const ContactUs = ({ navigation }) => {
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
          <Text style={{ color: '#8C8BA5', fontSize: 24 }}>CONTACT US</Text>
          <Text style={{ color: '#8C8BA5', fontSize: 16 }}>
            Last Update: June 11, 2021
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
