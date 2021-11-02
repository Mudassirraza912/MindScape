import React from 'react'
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
// import PersonaSVG from '../../assets/images/Name.svg'
import SetNameSvg from '../../assets/SVG/setNameSVG'
export const HomeSetName = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SetNameSvg
                // width={"100%"}
                width={Dimensions.get('screen').width}
                height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    //  top: 0,
                    //  right: 0,
                    //  left: 0

                }}
            />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%",paddingLeft:20 }}>
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
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeSetCountry')}
                    backgroundColor="transparent"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#9493AD",
        paddingHorizontal: "15%"
    },
    field: {
        borderBottomWidth: 1,
        borderBottomColor: "#DCD7D9",
        fontSize: 22
    }
})