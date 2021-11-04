import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'
import SleepHourSVG from '../../assets/images/sleepHours.svg'
export const SleepHours = () => {

    return(
        <View style={{flex: 1}}>
            <SleepHourSVG
                style={{
                    position: 'absolute',
                    bottom: 0,
                }}
            />
         <View style={styles.bodyContainerStyle}>
            <Text style={styles.textStyle}>
                GOOD MORNING DANIEL
            </Text>
         </View>
        </View>
    )

}

const styles = StyleSheet.create({
    bodyContainerStyle : {flex: 1, alignItems: 'center', marginTop: "40%"},
    textStyle: {
        color: "#fff",
        fontFamily: "Regulator-Nova",
        fontSize: 18
    }
})