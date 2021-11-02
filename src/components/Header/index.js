import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

const index = () => {
    return (
        <View style={{
            height: 120,
            backgroundColor: '#B3B3C9'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center'
            }}>
                <View>
                    <Image source={require('../../assets/images/women.png')} style={{
                        width: 100,
                        height: 100
                    }} />
                </View>

            </View>
        </View>
    )
}


export default index