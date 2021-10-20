import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const GetstartedMain = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Get Started Main
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('WalkThrough')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>
    )
}