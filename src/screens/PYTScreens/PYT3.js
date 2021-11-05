import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
import Feather from 'react-native-vector-icons/Feather'

export const PYT3 = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />

            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#FFFFFF', '#EDE7E4']}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View
                    style={styles.LinearGradient2}
                >
                    <ImageBackground source={require('../../assets/images/pyt3.png')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{
                            height: 400,
                            // backgroundColor: 'red',
                            justifyContent: 'space-between'

                        }}>


                            <Text style={styles.discliamerTextStyle}>
                                Tomorrow will be
                                {'\n'}a better day
                                {'\n'}For now...
                            </Text>

                            <View>

                                <Text style={{
                                    color: '#FFFF',
                                    fontSize: 18,
                                    fontFamily: 'OPTIMA',
                                    textAlign: 'center'
                                }}>
                                    Take a deep breathe
                                </Text>
                                <Text style={{
                                    color: '#F8F7F4',
                                    fontSize: 15,
                                    fontFamily: 'OPTIMA',
                                    textAlign: 'center'
                                }}>
                                    ___
                                </Text>
                                <Text style={{
                                    color: '#FFFF',
                                    fontSize: 18,
                                    fontFamily: 'OPTIMA',
                                    textAlign: 'center'
                                }}>
                                    Call a close friend
                                </Text>
                                <Text style={{
                                    color: '#F8F7F4',
                                    fontSize: 15,
                                    fontFamily: 'OPTIMA',
                                    textAlign: 'center'
                                }}>
                                    ___
                                </Text>
                                <Text style={{
                                    color: '#FFFF',
                                    fontSize: 18,
                                    fontFamily: 'OPTIMA',
                                    textAlign: 'center'
                                }}>
                                    Play your favorite music
                                </Text>

                            </View>


                        </View>




                    </ImageBackground>
                </View>

            </LinearGradient>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    LinearGradient1: {
        flex: 1, alignItems: 'center'
    },
    crossStyle: {
        width: '85%',

        marginTop: height * 0.02,
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.75, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    discliamerTextStyle: {
        color: '#FFFF',
        fontSize: 22,
        fontFamily: 'OPTIMA',
        textAlign: 'center'
    },
    centerTextViewStyle: {
        marginVertical: height * 0.12,
        width: '80%',
        // fontFamily: 'Optima'
    },
    centerTextStyle: {
        color: '#706F93',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 27,
        // fontFamily: 'Regulator-Nova',
    },
    buttonViewStyle: {
        marginTop: height * 0.01
    },
    Button: {
        height: 24,
        width: 131,
        backgroundColor: '#EEE8E5',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    }

})