import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import ToggleButton from '../../components/ToggleButton/index'
import Icon from 'react-native-vector-icons/EvilIcons'

export const Account = ({ navigation }) => {
  const onSelectSwitch = index => {
    // alert(index === 1 ? 'Switch Off' : 'Switch On')
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'flex-end',
            paddingTop: '12%',
            paddingRight: '5%'
          }}>
          <Icon name="close" size={40} color="#8C8BA5" />
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8 }}>
            ACCOUNT
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 6 }}>
            LOGIN INFORMATION
          </Text>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8 }}>
            Tap to Type
          </Text>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
              Name
            </Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="Dan"
                placeholderTextColor="#8C8BA5"


              />
            </View>
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
              Email
            </Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="daniel.nehme1@icloud.com"
                placeholderTextColor="#8C8BA5"
    
  
              />
            </View>
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
              Contact
            </Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="+971 55 8477 327"
                placeholderTextColor="#8C8BA5"
   

              />
            </View>
          </View>
         
          <TouchableOpacity
          onPress={() => navigation.navigate('EmailVerification')}
          activeOpacity={0.7}
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '70%' }}>
              <Text
                style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 5 }}>
                Refresh Your Silhouette
              </Text>
            </View>
            <View
              style={{ width: '30%', alignItems: 'flex-end', paddingRight: 4 }}>
              <Image source={require('../../assets/images/group-244.png')} />
              <Image source={require('../../assets/images/group-245.png')} style={{position:"absolute",top:5, right:10, bottom:0,}}/>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
        //   onPress={() => navigation.navigate('EmailVerification')}
          activeOpacity={0.7}
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '40%', marginVertical:10,}}>
              <Image source={require('../../assets/images/Ellipse-59.png')} />
              <Image source={require('../../assets/images/group-243.png')} style={{position:"absolute",bottom:0, right:28, }}/>     
            </View>
            <View style={{ width: '60%', }}>
                  <View style={{marginTop: 25 ,width:100, height:33, borderRadius:20, backgroundColor:"#2F2F40", justifyContent:"center", alignItems:"center"}}>
                  <Text
                style={{ color: '#8C8BA5', fontSize: 16,  }}>
                Upload
              </Text>
                  </View>
                  <Text
                style={{ color: '#E39684', fontSize: 14, margin: 5 }}>
                *update within {'\n'}24 hours
              </Text>              
            </View>
          </TouchableOpacity>
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
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 50
  },
  input: {
    width: 240,
    height: 33,
    marginVertical: 12,
    borderRadius: 25,
    paddingHorizontal: 14,
    color: '#FFF',
    fontSize: 16,
    padding: 1,
    backgroundColor: '#2F2F40'
  },
  BorderView: {
    borderBottomColor: 'rgba(255, 255, 255, .3)',
    borderBottomWidth: 1.5,
    width: '45%',
    marginVertical: 10
  }
})
