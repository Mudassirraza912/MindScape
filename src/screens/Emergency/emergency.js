// import React from 'react'
// import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// const { width, height } = Dimensions.get('screen')
// import Icon from 'react-native-vector-icons/EvilIcons'
// import Entypo from 'react-native-vector-icons/Entypo'

// export const Emergency = ({ navigation }) => {
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>

//         </SafeAreaView>
//     )
// }


// const styles = StyleSheet.create({
//     crossViewStyle: {
//         width: '90%',
//         alignSelf: 'center', justifyContent: 'center',
//         alignItems: 'flex-end',
//         height: height * 0.12,
//     },


// })

import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import { imagePicker } from '../../helper/utils'
import { Emergency2 } from './Emergency2'
const { width, height } = Dimensions.get('screen')
import EmergencySvg from '../../assets/SVG/EmergencySvg'

export const Emergency = ({ navigation }) => {

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
          <EmergencySvg
          width={Dimensions.get('screen').width}
          height={Dimensions.get('screen').height}
          style={{
              position: 'absolute',
            //   bottom: 0,
            //   top: 0,
            //   right: 0,
            //   left: 0

          }}
          />
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
        <View style={styles.topCutButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <Icon name="close" size={40} color="#A3A2BA" />
          </TouchableOpacity>
        </View>
        

        <View style={styles.sectionContainer}>
          <Text style={{ color: '#fff', fontSize: 24,}}>
          HEY DANIEL
          </Text>
          <Text style={{ color: '#49485F', fontSize: 60, lineHeight:60, marginVertical: 15 }}>
          Take a {'\n'}Deep {'\n'}Breathe
          </Text>
          <Text style={{ color: '#49485F', fontSize: 22,}}>
          & Follow the instructions carefully
          </Text>            
        </View>
       


       
       <View style={styles.backButtonView}>
       <TouchableOpacity     
       style={{flexDirection:"row", alignItems:"center", marginLeft:100}}
          onPress={() => navigation.navigate('Emergency2')}
          activeOpacity={0.7}>
          <Image style={{height: 25, width: 11.5, tintColor: '#fff',}}
            source={require('../../assets/images/arrow-right.png')}/>
            <Text style={{ color: '#49485F', fontSize: 22, marginLeft:18}}>
            Let’s go
            </Text>
        </TouchableOpacity>
       </View>


      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red'
  },
  topCutButton:{
    alignItems: 'flex-end',
    marginTop: 5,
    paddingRight: 20
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 60
  },
  backButtonView:{
    paddingBottom: 60,
    height: height * 0.40,
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
})





{/* <View style={styles.backButtonView}>
<TouchableOpacity
   onPress={() => navigation.goBack()}
   activeOpacity={0.7}>
   <Image style={{height: 30, width: 15, tintColor: '#A3A2BA', transform: [{ rotate: '180deg' }] }}
     source={require('../../assets/images/arrow-right.png')}/>
 </TouchableOpacity>
</View> */}