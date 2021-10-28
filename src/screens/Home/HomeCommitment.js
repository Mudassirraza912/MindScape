import React from 'react'
import { View, Text, StyleSheet, TextInput,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
export const HomeCommitment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%" }}>
                <Text style={{fontSize:24,color:"#BFBBCA",paddingVertical:10}}>
                    Always your long activity
                </Text>
                <Text style={{paddingVertical:10}}>We evaluate your performance                   & progress weekly.</Text>
                <Text >Completion of a task in only</Text>
                <Text>recognized once noted.</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('ToolsDashboard')}
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
        paddingHorizontal: "16%"
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