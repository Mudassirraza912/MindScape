import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'
import Button from '../../components/button/index'

export const FreeTrialSubscription = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        source={require('../../assets/images/FTSImg.png')}>
        <StatusBar hidden={true} />
        <View style={styles.TextView}>
          <Text style={{ color: '#fff', fontSize: 24, paddingVertical: 5 }}>
            7 DAY FREE TRIAL
          </Text>
          <Text style={{ color: '#fff', fontSize: 17 }}>
            SUBSCRIPTION OPTIONS
          </Text>
        </View>
        <View style={styles.BorderView} />
        <View style={styles.SectionContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flex: 1,
                fontSize: 22,
                color: '#fff',
                paddingVertical: 3
              }}>
              MONTHLY
            </Text>
            <View
              style={{
                flex: 1,
                fontSize: 20,
                color: '#fff',
                alignItems: 'flex-end'
              }}>
              <Text style={{ fontSize: 20, color: '#fff', paddingVertical: 3 }}>
                AED 37.5
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontSize: 16, color: '#E39684' }}>
              1 Week Complimentary
            </Text>
          </View>
        </View>
        <View style={styles.BorderView} />

        <View style={styles.SectionContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flex: 1,
                fontSize: 22,
                color: '#fff',
                paddingVertical: 3
              }}>
              PROGRAM
            </Text>
            <View
              style={{
                flex: 1,
                fontSize: 20,
                color: '#fff',
                alignItems: 'flex-end'
              }}>
              <Text style={{ fontSize: 20, color: '#fff', paddingVertical: 3 }}>
                AED 150
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontSize: 16, color: '#E39684' }}>
              Most Popular
            </Text>
          </View>
        </View>
        <View style={styles.BorderView} />

        <View style={styles.ButtonView}>
          <Button
            onPress={() => navigation.navigate('EmailVerification')}
            title="Start my 7-day free trial"
            buttonStyle={{
              height: 26,
              width: 235,
              backgroundColor: 'rgba(229, 228, 247, .35)',
              marginVertical: 15
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)' }}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#9493AD'
  },
  TextView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  BorderView: {
    borderBottomColor: '#ffffff99',
    borderBottomWidth: 0.2
  },
  SectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '12%'
  },
  ButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
