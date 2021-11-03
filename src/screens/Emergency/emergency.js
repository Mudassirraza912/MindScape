import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export const Emergency = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    crossViewStyle: {
        width: '90%',
        alignSelf: 'center', justifyContent: 'center',
        alignItems: 'flex-end',
        height: height * 0.12,
    },


})