import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'
const CustomDrawer = () => {
    const Data = [
        {
            title: 'PREFERENCES',
            navigateTo: 'PREFERENCES'
        },
        {
            title: 'ACOUNT',
            navigateTo: 'ACOUNT'
        },
        {
            title: 'EMERGENCY',
            navigateTo: 'EMERGENCY'
        },
        {
            title: 'HELP CENTER',
            navigateTo: 'HELP CENTER'
        },
        {
            title: 'SUBSCRIPTION',
            navigateTo: 'SUBSCRIPTION'
        },
        {
            title: 'ABOUT US',
            navigateTo: 'ABOUT US'
        },
        {
            title: 'PRIVACY',
            navigateTo: 'PRIVACY'
        },
        {
            title: 'TERMS OF USE',
            navigateTo: 'TERMS OF USE'
        },
        {
            title: 'CONTACT US',
            navigateTo: 'CONTACT US'
        },
    ]


    return (
        <LinearGradient
            colors={['#F4D5CE', '#ECE3E2',]}
            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>




            {
                Data.map((item, i) => {
                    return (

                        <TouchableOpacity
                            onPress={() => {
                                item.navigateTo &&
                                    // props.navigation.navigate(item.navigateTo);
                                    alert('Navigate')
                            }}
                            activeOpacity={0.7}
                            key={i}
                            style={{
                                flexDirection: 'row',
                                width: '70%',
                                alignSelf: 'center',
                                // backgroundColor: 'red',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginVertical: 3
                            }}>

                            <View style={{
                                borderBottomWidth: 0.5,
                                borderBottomColor: '#FFFFFF'

                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    fontFamily: 'Regulator-Nova',
                                    color: '#6B6B8D',
                                    paddingBottom: 5
                                }}>{item.title}</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-small-right' size={35} color='#FFFFFF' />
                            </View>
                        </TouchableOpacity>


                    )
                })
            }
            <TouchableOpacity
                activeOpacity={0.7}
                style={{

                    // marginTop: 50,
                    height: 100,
                    // backgroundColor: 'green',
                    justifyContent: 'flex-end',
                    // alignItems: 'center'

                }}>
                <Entypo name='chevron-thin-left' size={35} color='#C6C5D0' />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CustomDrawer
