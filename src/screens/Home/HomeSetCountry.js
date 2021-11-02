import React from 'react'
import { View, Text, StyleSheet, TextInput,Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SetNameSvg from '../../assets/SVG/setNameSVG'
import NewmorphButton from '../../components/NewmorphButton/index'

const {width, height} = Dimensions.get('screen')
export const HomeSetCountry = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SetNameSvg
                // width={"100%"}
                // width={Dimensions.get('screen').width}
                // height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0

                }}
            />
            <View style={{alignSelf: 'center'}}>
                <View>
                    <Text >
                        So Daniel,
                    </Text>
                    <Text>Which country are you based in?</Text>
                    <View style={styles.button}>
                        <Text style={{color:"#fff"}}>United Arab Emirates</Text>
                        <Image style={{top:6, left: width - width + 30}} source={require('../../assets/images/ComponentArrow.png')}/>
                    </View>
                </View>
                <View style={{alignSelf: 'center', top: height/4}}>
                    <NewmorphButton
                        onPress={() => navigation.navigate('HomeWarning')}
                        backgroundColor="#9493AD"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#9493AD",
        // paddingHorizontal: "15%"
        alignItems:'center'
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        alignContent: "space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"100%",
        height:20
    }
})