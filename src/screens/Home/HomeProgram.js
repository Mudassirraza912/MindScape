import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
export const HomeProgram = ({ navigation }) => {
    const [currentPosition, setCurrentPosition] = useState(3);
    const [renderLabel, setRenderLabel] = useState();
    const onStepPress = (position) => {
        setCurrentPosition(currentPosition);
    };
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: 'transparent',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: 'transparent',
        stepStrokeUnFinishedColor: 'transparent',
        separatorFinishedColor: '#ADAABC',
        separatorUnFinishedColor: '#ADAABC',
        stepIndicatorFinishedColor: '#ADAABC',
        stepIndicatorUnFinishedColor: '#ADAABC',
        stepIndicatorCurrentColor: 'red',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: 'transparent',
        stepIndicatorLabelFinishedColor: 'transparent',
        stepIndicatorLabelUnFinishedColor: 'transparent',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#ADAABC',
        linearColor1: '#E39684',
        linearColor2:'#fff'
    }
    return (
        <LinearGradient style={styles.container} colors={['#EDE7E4', '#9B98B0']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: "14%", paddingTop: "18%" }}>
                    <Text style={{ paddingVertical: 4, color: "#A3A2BA", fontSize: 24 }}>PROGRAM</Text>
                    <View style={styles.border}></View>
                    <Text style={{ color: "#A3A2BA", fontSize: 14 }}>VIRTUE 1</Text>
                    <Text style={{ color: "#706F93", fontWeight: "bold", fontSize: 24 }}>MINDFULNESS</Text>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1 }}>
                            <StepIndicator
                                stepCount={5}
                                customStyles={customStyles}
                                currentPosition={currentPosition}
                                direction={'vertical'}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { onStepPress() }}
                                style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                                <Text style={{ color: "#E39684", fontSize: 15, fontWeight: "bold", fontSize: 15 }}>Connect</Text>
                                <Text style={{ color: "#E39684", fontSize: 15, fontWeight: "bold", fontSize: 15  }}>w1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                 onPress={() => { onStepPress() }}
                                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{color:"#706F93",fontSize: 15}}>Manage</Text>
                                <Text style={{color:"#706F93",fontSize: 15}}>w2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                     activeOpacity={0.8}
                                     onPress={() => {onStepPress()}} 
                            style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                                <Text style={{color:"#706F93",fontSize: 15}}>Discover</Text>
                                <Text style={{color:"#706F93",fontSize: 15}}>w3</Text>
                            </TouchableOpacity >
                            <TouchableOpacity 
                             activeOpacity={0.8}
                            onPress={() => {onStepPress()}} 
                            style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                                <Text style={{color:"#706F93",fontSize: 15}}>Practice</Text>
                                <Text style={{color:"#706F93",fontSize: 15}}>w4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            activeOpacity={0.8}
                            onPress={() => {onStepPress()}} 
                            style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                                <Text style={{color:"#706F93",fontSize: 15}}>Become</Text>
                                <Text style={{color:"#706F93",fontSize: 15}}>w5</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.textBorder}>
                    <Text style={{ color: "#BCBAC8", fontWeight: "bold", fontSize: 14 }}>VIRTUE 2</Text>
                    <Text style={{ color: "#A8A6B9", fontSize: 24  }}>CURIOSITY</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={{ color: "#BCBAC8", fontWeight: "bold", fontSize: 14 }}>VIRTUE 3</Text>
                    <Text style={{ color: "#A8A6B9", fontSize: 24  }}>COURAGE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={{ color: "#BCBAC8", fontWeight: "bold", fontSize: 14 }}>VIRTUE 4</Text>
                    <Text style={{ color: "#A8A6B9", fontSize: 24  }}>GRATITUDE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={{ color: "#BCBAC8", fontWeight: "bold", fontSize: 14 }}>VIRTUE 5</Text>
                    <Text style={{ color: "#A8A6B9", fontSize: 24  }}>COMPASSION</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('HomeMindfulness')}
                        style={styles.buttondv}
                    >
                        <Text style={{ color: "#A3A2BA" }}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 30 }}></View>
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
    textBorder: {
        borderTopWidth: 1,
        borderTopColor: "#CECBD3",
        paddingVertical: 20,
        paddingLeft: "15%"
    },
    buttondv: {
        backgroundColor: "#ffffff",
        width: 150,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
})

