import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
export const HomeProgram = ({navigation}) => {
    return (
        <LinearGradient style={styles.container} colors={['#EDE7E4','#9B98B0']}>
            <View style={{paddingHorizontal:"14%"}}>
            <Text style={{paddingVertical:4}}>PROGRAM</Text>
            <View style={styles.border}></View>
            <Text>VIRTUE 1</Text>
            <Text>MINDFULNESS</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text>Connect</Text>
                <Text>w1</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text>Manage</Text>
                <Text>w2</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text>Discover</Text>
                <Text>w3</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text>Practice</Text>
                <Text>w4</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text>Become</Text>
                <Text>w5</Text>
            </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    border:{
        backgroundColor:"#E5DFDF",
        height:1,
        width:"36%",
        marginVertical:10
    }
})

