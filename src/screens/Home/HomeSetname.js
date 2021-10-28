import React from 'react'
import { View, Text, StyleSheet, TextInput, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
export const HomeSetName = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flex:2,justifyContent:"center",paddingTop:"30%"}}>
            <Text >
                So Daniel,
            </Text>
            <Text>What do your friend call you?</Text>
            <TextInput
                placeholder="Nick Name"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
                </View>
            <View style={{flex:1,alignItems:"center",}}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeSetCountry')}
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
    field: {
        borderBottomWidth: 1,
        borderBottomColor: "#DCD7D9",
        fontSize: 22
    }
})