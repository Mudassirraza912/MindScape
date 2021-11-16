import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../utils/fonts';

export const Login = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/LogIn.png')}
            style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 40 }}>
                <Text style={styles.helloText}>
                    Log In
                </Text>

            </View>

            <TextInput
                placeholder="Email Address"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
            <TextInput
                placeholder="Password"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>

            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                activeOpacity={0.7}
                style={{
                    justifyContent: "center", alignItems: "center", marginTop: 20,
                    // marginBottom: 25
                }}>
                <Text style={{
                    fontSize: 14,
                    color: '#fff',
                    fontFamily: 'Regulator Nova Medium'
                }}>
                    Forgot Password?
                </Text>

            </TouchableOpacity>

            <View style={{ flex: 0, justifyContent: "center", alignItems: "center", marginTop: '25%' }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('AccountSecure')}
                    backgroundColor="#9493AD"
                />
            </View>

            <View
                style={{
                    justifyContent: "center", alignItems: "center", flexDirection: 'row', marginTop: 10
                    // marginBottom: 25
                }}>
                <Text style={{
                    fontSize: 14,

                }}>
                    Don't have an Account ?
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        navigation.navigate('WalkThrough')
                    }}
                >
                    <Text style={{
                        fontSize: 14,
                        paddingLeft: 5,
                        color: '#fff',
                        fontFamily: 'Regulator Nova Medium'
                    }}>
                        SignUp
                    </Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent:
            "center",
        backgroundColor: "#9493AD",
    },
    helloText: {
        paddingBottom: "18%",
        color: "#fff",
        fontSize: 17,
        fontFamily: 'Regulator Nova Medium'
    },
    field: {
        borderBottomWidth: 1,
        textAlign: "center",
        borderBottomColor: "#CCCBD8",
        fontSize: 22,
        fontFamily: fonts.regulatorLight,
        paddingVertical: 10,
        // marginBottom:20
    }
})