import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const WalkThrough = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>


        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                WalkThroug page
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>


        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',  
    },
})