import React from 'react'
import { View, Text, StyleSheet, TextInput,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
export const HomeSetCountry = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%" }}>
                <Text >
                    So Daniel,
                </Text>
                <Text>Which country are you based in?</Text>
                <View style={styles.button}>
                <Text style={{color:"#fff"}}>United Arab Emirates</Text>
               <Image style={{marginTop:6}} source={require('../../assets/images/ComponentArrow.png')}/>
            </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
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
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:20
    }
})