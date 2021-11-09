import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'

export const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.helloText}>
                    Hello!
                </Text>
                <TouchableOpacity  >
                    <Text style={{ paddingBottom: 6, fontFamily: 'Optima-Regular' }}>
                        Top to type
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder="First Name"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
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
            <TextInput
                placeholder="Retype Password"
                placeholderTextColor="#CFCFDB"
                style={styles.field}

            ></TextInput>
            <View style={{ flex: 0, justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('OtpVerification')}
                    backgroundColor="#9493AD"
                />
            </View>
        </View>
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
        fontFamily: 'Regulator-Nova'
    },
    field: {
        borderBottomWidth: 1,
        textAlign: "center",
        borderBottomColor: "#CCCBD8",
        fontSize: 22,
        fontFamily: 'Regulator-Nova'

    }
})