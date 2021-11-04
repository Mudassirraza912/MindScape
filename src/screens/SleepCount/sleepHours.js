import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import SleepHourSvg from '../../assets/SVG/SleepHour'
// import SleepHourSVG from '../../assets/images/sleepHours.svg'
import { Circle, Text as SvgText, TextPath, TSpan, G, Svg }
    from 'react-native-svg';

const { height, width } = Dimensions.get('screen')
export const SleepHours = () => {

    return (
        <View style={{ flex: 1 }}>
            <SleepHourSvg
                height={height}
                width={width}
                style={{
                    position: 'absolute',
                    bottom: 0,
                }}
            />
            {/* <View style={[styles.bodyContainerStyle,  {transform: [{ rotate: '360deg'}], left: width/2}]}>
            {[1,2,3,4,5,6,7,8,9,0].map((value, index) => {
                console.log(" width/index+1",  width/1+index)
                return(
                    <Text style={{marginTop: 10, right: width/(1+index)+ 50}}>
                        {index+1}
                    </Text>
                )
            })}
         </View> */}

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>

                <Svg position="absolute" height="100%" width="100%"
                    viewBox="-50 -60 500 500">
                    <G id="circle">
                        <Circle
                            r={75}
                            x={150}
                            y={176}
                            fill="none"
                            stroke="transparent"
                            strokeWidth={14}
                            transform="rotate(-175)"
                        />
                    </G>
                    <SvgText fill="#000" fontSize="14" letterSpacing="2">
                        <TextPath href="#circle">
                            <TSpan dx="190" dy={-140}>
                                1  2  3  4  5  6  7  8  9  10
                            </TSpan>
                        </TextPath>
                    </SvgText>
                </Svg>
                <View>
                </View>
            </View>
            <View style={styles.bodyContainerStyle}>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    bodyContainerStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    textStyle: {
        color: "#fff",
        fontFamily: "Regulator-Nova",
        fontSize: 18,
        // marginTop: 100,
    }
})