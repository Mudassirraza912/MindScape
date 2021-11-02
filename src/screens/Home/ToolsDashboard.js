import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
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
                TOOLS
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomePersona')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity>
            <Image style={{marginTop:8,marginLeft:3}} source={require('../../assets/images/Group276.png')}/>
            <Text>DASHBOARD</Text>
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