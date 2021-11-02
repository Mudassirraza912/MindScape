import React from 'react'
import { View, Text, StyleSheet, TextInput,Image,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import SetNameSvg from '../../assets/SVG/setNameSVG'
export const HomeSetCountry = ({ navigation }) => {
    return (
        <View style={styles.container}>
                   <SetNameSvg
                width={100}
                width={Dimensions.get('screen').width}
                height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    // top: 0,
                    // right: 0,
                    // left: 0

                }}
            />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%",paddingLeft:20 }}>
                <Text >
                    So Daniel,
                </Text>
                <Text>Which country are you based in?</Text>
                <View style={styles.button}>
                <Text style={{color:"#fff"}}>United Arab Emirates</Text>
               <Image style={{marginTop:8,marginLeft:3}} source={require('../../assets/images/ComponentArrow.png')}/>
            </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeWarning')}
                    // backgroundColor="#9493AD"
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
        width:"90%",
        height:24,
    }
})