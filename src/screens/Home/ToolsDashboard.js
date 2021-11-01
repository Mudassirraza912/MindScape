import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PersonaSVG from '../../assets/images/Step5.svg'
export const ToolsDashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
                          <PersonaSVG 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
            <Text>
                Tool 
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomePersona')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})