import React from 'react'
import { View, Text, StyleSheet, TextInput,Image, Dimensions, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import WarningSvg from '../../assets/SVG/warningSvg'

const { width, height } = Dimensions.get('screen')
export const HomeWarning = ({ navigation }) => {
    return (
        <View style={styles.container}>
               <WarningSvg
                // width={width}
                // height={height}
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%" }}>
                <StatusBar hidden={true} />
                <Text style={{fontSize:24,color:"#A6A4B9",fontFamily:'Regulator Nova'}}>
                    As they say 'Rome wasn't build in a day
                </Text>
                <Text style={{color:"#49485F"}}>This evolution entirely depends on your commmitment.We sutable incremental changes
                    to your lifestyle to help you discover the best version of yourlife.
                </Text>
            </View>
            <View style={{ flex: 0.5, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeRoutine')}
                    backgroundColor="transparent"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#9493AD",
        paddingHorizontal: "15%"
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:20
    }
})