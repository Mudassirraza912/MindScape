import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image,Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
// import DateTimePicker from '@react-native-community/datetimepicker';

export const HomeRoutine = ({ navigation }) => {
    const showTimepicker = () => {
        showMode('time');
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
      const [time, setTime] = useState (false);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    return (
        <View style={styles.container}>
            <View style={{ flex: 3, justifyContent: "center", paddingTop: "0%", }}>
                <Text style={{ textAlign: "center", paddingBottom: 20, color: "#B6B4C5" }}>
                    COMMITMENT
                </Text>
                <Text style={{ color: "#D1CDD4", fontSize: 20, paddingVertical: 10 }}>Lets align with your routine</Text>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }}>What time do you make up?</Text>
                    <View style={styles.buttondv}>
                        <Text style={{ color: "#fff" }}>07:00</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </View>

                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }} >Least busy hour in the afternoon?</Text>
                    <View style={styles.buttondv}>
                        <Text style={{ color: "#fff" }}>07:00</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }}>What time do you have dinner</Text>
                    <TouchableOpacity
                        onPress={showTimepicker}
                        style={styles.buttondv}>
                        <Text style={{ color: "#fff" }}>07:00</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                          timeZoneOffsetInMinutes={0}
                            testID="dateTimePicker"
                            value={time}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeCommitment')}
                    backgroundColor="#9493AD"
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
    button: {
        backgroundColor: "#2F2F40",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: "15%",
        width: "80%",
        height: 20
    },
    border: {
        backgroundColor: "#fff",
        width: "45%",
        height: 0.5
    },
    buttondv: {
        // backgroundColor:"#9493AD",
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 20,
    }
})