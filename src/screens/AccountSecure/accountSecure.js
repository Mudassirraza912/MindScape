import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Button from '../../components/button/index'

export const AccountSecure = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#9493AD'} />
      <View style={styles.mainContainer}>
        <View style={styles.TextView}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 24,
              textAlign: 'center'
            }}>
            KEEP YOUR {'\n'}ACCOUT SECURE
          </Text>
        </View>
        <View style={styles.TextView} />
        <View style={styles.ButtonView}>
          <Button
            // onPress={() => navigation.navigate('EmailVerification')}
            title="YES, PROTECT WITH FACE ID"
            buttonStyle={{
              height: 26,
              width: 235,
              backgroundColor: 'rgba(229, 228, 247, .35)',
              marginVertical: 15
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)' }}
          />
          <Button
            onPress={() => navigation.navigate('EmailVerification')}
            title="May be later"
            buttonStyle={{
              height: 26,
              width: 235,
              borderColor: 'rgba(255, 255, 255, 1)'
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)' }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#9493AD'
  },
  TextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
