import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const EmailVerification = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground
        style={{ height: '100%', width: '100%' }}
        source={require('../../assets/images/FTSImg.png')}>
            {/* <Text>
                Email Verification page
            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity> */}
            </ImageBackground>
        </View>
    )
}