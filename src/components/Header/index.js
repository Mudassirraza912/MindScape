import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('screen')

const index = () => {
    const [activeTab, setActiveTab] = useState('')
    const Title = [
        {
            title: activeTab == 0 ? 'MINDFULLNESS' : 'Mindfullness',
        },
        {
            title: activeTab == 1 ? 'CURIOSITY' : 'Curiosity',
        },
        {
            title: activeTab == 2 ? 'COURAGE' : 'Courage',
        },
        {
            title: activeTab == 3 ? 'GRATITUDE' : 'Gratitude',
        },
        {
            title: activeTab == 4 ? 'COMPASSION' : 'Compassion',
        },
    ]
    return (
        <>
            <LinearGradient
                colors={['#B1B1C7', '#B1B1C7']}

                style={styles.topViewStyle}

            >
                <View
                    style={styles.rowViewStyle}>
                    <View style={{ marginTop: 35 }} >
                        <Image source={require('../../assets/images/women.png')} style={{
                            width: 100,
                            height: 100,

                        }} />
                    </View>
                    <Text style={styles.nameTextStyle}>DAN’S MINDSCAPE</Text>

                </View>
            </LinearGradient>



            <View style={{
                // width: '100%',
                // height: 60,
                // backgroundColor: 'red',
                flexDirection: 'row'

            }}>
                {
                    Title.map((item, i) => {
                        return (
                            <>
                                <TouchableOpacity

                                    onPress={() => {
                                        setActiveTab(i)
                                    }}
                                    style={{
                                        width: activeTab == i ? '30%' : '17.5%',
                                    }}>
                                    <LinearGradient

                                        colors={i == 1 ? ['#6C84AF', '#9C96CB'] : i == 2 ? ['#5F4789', '#4DB3B0'] : i == 3 ? ['#14256B', '#0BB2A6'] : i == 4 ? ['#115262', '#6D9FAA'] : ['#7C7B9C', '#9E9DB6',]}
                                        style={{

                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: activeTab == i ? 60 : 50
                                            // marginTop: 10
                                        }}
                                    >
                                        <Text style={{ fontSize: activeTab == i ? 12 : 10, fontFamily: 'Regulator-Nova', color: '#FFFFFF' }}>{item.title}</Text>


                                    </LinearGradient>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }


            </View>
        </>
    )
}


export default index



const styles = StyleSheet.create({
    topViewStyle: {
        height: height * 0.16,
        // backgroundColor: '#B3B3C9'
    },
    rowViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',
        alignItems: 'flex-end'
    },
    nameTextStyle: {
        paddingBottom: 10, fontSize: 16, color: '#706F93'
    }


})