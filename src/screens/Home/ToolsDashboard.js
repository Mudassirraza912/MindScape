import React from 'react'
import { View, Text,StyleSheet,Image,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ToolSvg from '../../assets/SVG/toolSvg'
import NewmorphButton from '../../components/NewmorphButton/index'
export const ToolsDashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ToolSvg 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
          <View style={{flex:3,justifyContent:"center",alignItems:"center",paddingHorizontal:20}}>
          <StatusBar hidden={true} />
            <Text style={{color:"#A3A2BA",paddingBottom:20}}>
                TOOLS
            </Text>
            <Text style={{color:"#A3A2BA",paddingBottom:15,fontSize:20}}>Virtues are equipped with {'\n'} a set of tools.</Text>
            <Text style={{paddingBottom:10,color:"#E39684",paddingLeft:17,fontSize:18}}>These tools are designed and destined to become your life long compassion.</Text>
            <Image style={{marginTop:8,marginLeft:3}} source={require('../../assets/images/Group276.png')}/>
            <Text style={styles.toolbox}>Toolbox</Text>
            <Text style={{paddingVertical:20,color:"#E39684"}}>DASHBOARD</Text>
            </View>
            <View style={{flex:1}}>
            <NewmorphButton
                    onPress={() => navigation.navigate('HomePersona')}
                    // backgroundColor="#9493AD"
                    backgroundColor="transparent"
                />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    toolbox:{
        position:"absolute",
        zIndex:30,
        top:"65%",
        color:"#fff"
    }
})