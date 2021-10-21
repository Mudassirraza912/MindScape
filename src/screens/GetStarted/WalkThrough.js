import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WalkThroughComponent } from '../../components/Walkthrough'

export const WalkThrough = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <WalkThroughComponent />
        </View>
    )
}