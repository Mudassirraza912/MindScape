import React, { useState } from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
export const HomeProgram = ({ navigation }) => {
const [currentPosition,setCurrentPosition] = useState (0);
const [renderLabel,setRenderLabel] = useState ();
const labels = [];
const customStyles = {
    stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4',
  }
    return (
        <LinearGradient style={styles.container} colors={['#EDE7E4', '#9B98B0']}>
            <ScrollView >
            <View style={{ paddingHorizontal: "14%",paddingTop:"18%" }}>
                <Text style={{ paddingVertical: 4 }}>PROGRAM</Text>
                <View style={styles.border}></View>
                <Text>VIRTUE 1</Text>
                <Text>MINDFULNESS</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <StepIndicator
                            stepCount={4}
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            onPress={() => {}}
                            direction={'vertical'}
                        />
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text>Connect</Text>
                            <Text>w1</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text>Manage</Text>
                            <Text>w2</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text>Discover</Text>
                            <Text>w3</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text>Practice</Text>
                            <Text>w4</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text>Become</Text>
                            <Text>w5</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.textBorder}>
                    <Text>VIRTUE 2</Text>
                    <Text>CURIOSITY</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text>VIRTUE 3</Text>
                    <Text>COURAGE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text>VIRTUE 4</Text>
                    <Text>GRATITUDE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text>VIRTUE 5</Text>
                    <Text>COMPASSION</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",paddingVertical:20}}>
                <TouchableOpacity 
                style={styles.buttondv}
                >
                </TouchableOpacity>
                </View>
                </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    border: {
        backgroundColor: "#E5DFDF",
        height: 1,
        width: "36%",
        marginVertical: 10
    },
    circle: {
        backgroundColor: "red",
        width: 14,
        height: 14,
        borderRadius: 30,
        overflow: "hidden"
    },
    textBorder:{
        borderTopWidth:1,
        borderTopColor:"#CECBD3",
        paddingVertical:20,
        paddingLeft:"15%"
    },
    buttondv:{
        backgroundColor:"#ffffff",
        width:160,
        height:40,
    }
})

