import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const AboutUs = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                About Us page
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ToolsDashboard')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>
    )
}