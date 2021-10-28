import React from 'react'
import { View, Text, StyleSheet, StatusBar,TextInput, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/button/index'
import OTPInputView from '@twotalltotems/react-native-otp-input'

export const ForgotPassword = ({ navigation }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.mainContainer}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}/>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center',}}>
            Enter 4 digit code {'\n'}to authenticate
          </Text>
          <Text style={{ color: '#000', fontSize: 16, textAlign: 'center' }}>
            Check your email
          </Text>
        </View>
        <View style={{flex:1,}}>
        <OTPInputView
    style={{margin:90 }}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    placeholderCharacter={'0'}
    placeholderTextColor={'#ffffff90'}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
      navigation.navigate('AccountSecure')
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
          </View>
        <View style={styles.sectionContainer}>
          <Button
            // onPress={() => navigation.navigate('AccountSecure')}
            title="Resend"
            buttonStyle={{ width: 85, height: 25, borderColor: '#fff' }}
            textStyle={{ fontSize: 16, color: '#fff' }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#9493AD',   
  },
  sectionContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  underlineStyleBase: { 
  height: 100,
  borderWidth: 0,
  fontSize:45,
  color:"#fff",  
}, 
})
