import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image,Platform, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import DateTimePicker from '@react-native-community/datetimepicker';
import PersonaSVG from '../../assets/images/Step1.svg'

export const HomeRoutine = ({ navigation }) => {
    const showTimepicker = () => {
        showMode('time');
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');

        let time=currentDate.toString().substring(16,21)
        setCurrentTime(time)
        setCurrentTime2(time)
        setCurrentTime3(time)
        setDate(date);

        // switch () {
        //     case 'wakeUp':
        // }
      };
      const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('time');
    const [currentTime,setCurrentTime]=useState('')
    const [currentTime2,setCurrentTime2]=useState('')
    const [currentTime3,setCurrentTime3]=useState('')
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    return (
        <View style={styles.container}>
                      <PersonaSVG 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
            <View style={{ flex: 3, justifyContent: "center", paddingTop: "0%", }}>
                <Text style={{ textAlign: "center", paddingBottom: 20, color: "#B6B4C5" }}>
                    COMMITMENT
                </Text>
                <Text style={{ color: "#D1CDD4", fontSize: 20, paddingVertical: 10 }}>Lets align with your routine</Text>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }}>What time do you wake up?</Text>
                    <TouchableOpacity
                        onPress={showTimepicker}
                        style={styles.buttondv}>
                        <Text style={{ color: "#fff" }}>{    currentTime ? currentTime :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>

                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }} >Least busy hour in the afternoon?</Text>
                    <TouchableOpacity
                        onPress={showTimepicker}
                        style={styles.buttondv}>
                    <Text style={{ color: "#fff" }}>{    currentTime2 ? currentTime2 :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 6 }}>What time do you have dinner</Text>
                    <TouchableOpacity
                        onPress={showTimepicker}
                        style={styles.buttondv}>
                <Text style={{ color: "#fff" }}>{    currentTime3 ? currentTime3 :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                        //   timeZoneOffsetInMinutes={0}
                            testID="dateTimePicker"
                            value={date}
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
                    backgroundColor="transparent"
                />
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
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:20
    },
    border:{
        backgroundColor:"#fff",
        width:"45%",
        height:0.5
    },
    buttondv: {
        backgroundColor:"#9493AD",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 20,
    }
})