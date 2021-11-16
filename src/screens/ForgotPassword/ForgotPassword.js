import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../utils/fonts';

export const ForgotPassword = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/LogIn.png')}
            style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 40 }}>
                <Text style={styles.helloText}>
                    Forgot Password
                </Text>

            </View>

            <TextInput
                placeholder="Email Address"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>




            <View style={{ flex: 0, justifyContent: "center", alignItems: "center", marginTop: '25%' }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('ChangePassword')}
                    backgroundColor="#9493AD"
                />
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