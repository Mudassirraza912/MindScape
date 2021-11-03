import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import ToggleButton from '../../components/ToggleButton/index'
import Icon from 'react-native-vector-icons/EvilIcons'
import { imagePicker } from '../../helper/utils'

export const Subscription = ({ navigation }) => {
  const [image, setImage] = useState()
  const imageSelector = async () => {
    try {
      const url = await imagePicker(false)
      setImage(url[0])
      console.log('url', url)
    } catch (error) {}
  }

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'flex-end',
            paddingTop: 50,
            paddingRight: 20
          }}>
          <Icon name="close" size={40} color="#8C8BA5" />
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8 }}>
            SUBSCRIPTION
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 6 }}>
            YOUR MEMBERSHIP
          </Text>
          <View style={{flexDirection:"row" ,alignItems:"center", justifyContent:"space-between"}}>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8 }}>
            Monthly
          </Text>
          <Text style={{ color: '#A4A3BC90', fontSize: 16, margin: 8, }}>
          Change Plan
          </Text>

          </View>
           <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Renewal Date</Text>
            <View>
              <Text style={styles.input}>25/9/2022</Text>
            </View>
            <View style={styles.BorderView} />
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>App User ID</Text>
            <View>
              <Text style={styles.input}>Xxxxxxx</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8 }}>
              Validate your Student ID
            </Text>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
                Institution Name
              </Text>
              <View>
                <Text style={styles.input}>Xxxxxxx</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
                Student Identification Number
              </Text>
              <View>
                <Text style={styles.input}>Xxxxxxx</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row'
            }}>
            <View style={{ width: '40%' }}>
              <TouchableOpacity
                onPress={() => imageSelector()}
                activeOpacity={0.7}
                style={{
                  marginTop: 25,
                  width: 100,
                  height: 35,
                  borderRadius: 20,
                  backgroundColor: '#2F2F40',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ color: '#8C8BA590', fontSize: 16 }}>Upload</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', justifyContent: 'flex-end' }}>
              <Text style={{ color: '#E39684', fontSize: 14 }}>
                Wait for our response via your email
              </Text>
            </View>
          </View>
          <TouchableOpacity
             onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 60
            }}>
            <Image
              style={{
                height: 30,
                width: 15,
                tintColor: '#A3A2BA',
                transform: [{ rotate: '180deg' }]
              }}
              source={require('../../assets/images/arrow-right.png')}
            />
          </TouchableOpacity>
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
  },
  input: {
    width: 191,
    height: 24,
    marginVertical: 5,
    color: '#8C8BA590',
    fontSize: 16
  },
  BorderView: {
    borderBottomColor: '#9493AD90',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 16
  }
})
