import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export const AboutUs = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <ImageBackground
          style={{ height: 476, width: '100%' }}
          source={require('../../assets/images/aboutUsImg.png')}>
          <View
            style={{
              alignItems: 'flex-end',
              paddingTop: 20,
              paddingRight: 20
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: 'flex-end',
                paddingTop: 20
              }}>
              <Icon name="close" size={40} color="#8C8BA5" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              height: 476,
              width: '100%',
              alignItems: 'center',
              paddingTop: 90
            }}>
            <Image
              source={require('../../assets/images/logo-37.5.png')}
              style={{ height: 27, width: 168, tintColor:"#fff" }}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#A1A0B9'
          }}>
          <View style={{ padding: 50 }}>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              ThirtySevenPointFive is an ideology-driven initiative dedicated to
              providing solutions to address a large spectrum of issues
              concerning Contemporary Wellbeing.
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 30
            }}>
            <Text
              style={{ color: '#49485F', fontSize: 16, textAlign: 'center' }}>
              Scroll to explore
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#49485F'
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 60
  }
})
