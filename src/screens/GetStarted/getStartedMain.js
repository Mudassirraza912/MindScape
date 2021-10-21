import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import Button from '../../components/button'

export const GetstartedMain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1,alignItems:"flex-end"}}>
                <Text>Skip</Text>
            </View>
            <Button
            buttonStyle={{borderColor:"red"}}
             onPress={() => navigation.navigate('WalkThrough')} title={"Get Started"} textStyle={{color: 'red'}} />
        </View>
    )
}


const styles = StyleSheet.create ({
    container:{
        flex:1,

    }
})