import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import Button from '../../components/button'

export const GetstartedMain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:2,alignItems:"flex-end",paddingTop:20,paddingRight:20}}>
                <Text style={{color:"#a2a2bc"}}>Skip</Text>
            </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"
        }}>
                <Text style={{color:"#fff",fontSize:15}}>Learn About</Text>
                <Text style={styles.mindScape}>MINDSCAPE</Text>
                <View style={{marginVertical:10}}>
            <Button 
            buttonStyle={{borderColor:"#c5cbe3"}}
             onPress={() => navigation.navigate('WalkThrough')} title={"Get Started"} textStyle={{color: '#7f83a0'}} />
             </View>
             </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#171634",
    },
    mindScape:{
        paddingBottom:10,
        fontSize:32,
        color:"#fff",
    }
})