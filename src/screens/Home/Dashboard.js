import React from 'react'
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Dashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Dashboard page
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ToolsDashboard')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#9493AD",
        flex:1,
    }
})