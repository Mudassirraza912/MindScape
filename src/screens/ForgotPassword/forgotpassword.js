import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Button from '../../components/button/index'

export const ForgotPassword = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#9493AD'}/>
      <View style={styles.mainContainer}>
        <View style={styles.ContainerView}>
          <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center',}}>
            Enter 4 digit code {'\n'}to authenticate
          </Text>
          <Text style={{ color: '#000', fontSize: 16, textAlign: 'center' }}>
            Check your email
          </Text>
        </View>
        <View style={styles.ContainerView}>
          <Text style={{ color: '#fff', fontSize: 48, textAlign: 'center' }}>
            0 0 0 0
          </Text>
        </View>
        <View style={styles.ContainerView}>
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
  ContainerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
