import React from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, Image} from 'react-native'
import WomenSvg from '../../assets/SVG/womenSvg.svg'

const {height, width} = Dimensions.get('screen')
export const SleepMsg = () => {

    return(
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../assets/images/start.png')} style={{height: height, width: width}}>
                <View style={styles.rememberContainer}>
                    <ImageBackground
                        source={require('../../assets/images/remember.png')}
                        style={styles.rememberImg}
                    >
                       <View style={styles.rememberMsgContainer}>
                            <Text style={styles.rememberHeading}> 
                                REMEMBER 
                            </Text>
                            <Text style={styles.rememberMsg}>
                                How you sleep at night {"\n"} determines how well {"\n"} you do in the day. 
                            </Text>
                       </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    bodyContainerStyle : {flex: 1, alignItems: 'center', marginTop: "40%"},
    textStyle: {
        color: "#fff",
        fontFamily: "Regulator-Nova",
        fontSize: 18
    },
    rememberContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    rememberImg:  { 
        height: 284,
        width: 280, 
        resizeMode: 'stretch' 
    },
    rememberHeading: {
        color: "#E39684"
    },
    rememberMsg: {
        color: "#fff"
    },
    rememberMsgContainer: {
        position: "absolute",
        top: height/7,
        left: width/6        
    }
})