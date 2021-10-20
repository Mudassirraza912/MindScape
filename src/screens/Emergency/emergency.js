import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Emergency = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Emergency page
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ToolsDashboard')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>
    )
}