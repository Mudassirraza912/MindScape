import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Button from '../../components/button/index'

export const ForgotPassword = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}/>
        <View style={styles.TextView}>
          <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center',}}>
            Enter 4 digit code {'\n'}to authenticate
          </Text>
          <Text style={{ color: '#000', fontSize: 16, textAlign: 'center' }}>
            Check your email
          </Text>
        </View>
        <View style={styles.NumberView}>
          <Text style={{ color: '#fff', fontSize: 48, textAlign: 'center' }}>
            0 0 0 0
          </Text>
        </View>
        <View style={styles.ButtonView}>
          <Button
            onPress={() => navigation.navigate('AccountSecure')}
            title="Resend"
            buttonStyle={{ width: 85, height: 25, borderColor: '#fff' }}
            textStyle={{ fontSize: 16, color: '#fff' }}
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
  NumberView: {
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
