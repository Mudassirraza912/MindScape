import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WalkThroughComponent } from '../../components/Walkthrough'

export const WalkThrough = ({navigation}) => {
    return (
<<<<<<< HEAD
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
=======
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <WalkThroughComponent />
>>>>>>> 125dec18c87bfdcc951a66e33e7c810b59966191
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