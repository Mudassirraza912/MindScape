import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ToolSvg from '../../assets/SVG/toolSvg'
export const ToolsDashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ToolSvg 
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