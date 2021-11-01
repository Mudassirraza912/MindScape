import React from 'react'
import { View, Text, StyleSheet, TextInput,Image,ImageBackground,StatusBar, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SetNameSvg from '../../assets/SVG/setNameSVG'
import NewmorphButton from '../../components/NewmorphButton/index'
const { width, height } = Dimensions.get('screen')
// import Svg, {
//     Use,
//     Images as SvgImag
//   } from 'react-native-svg';
export const HomePersona = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            {/* <Text>Hello</Text> */}
            <PersonaSVG 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
           
        {/* <View style={{flex: 1,}}>
        <StatusBar hidden={true} />
            <View style={{ flex: 3, justifyContent: "center" }}>
                <Text style={{color:"#A3A2BA",textAlign:"center"}}>
                    PERSONA
                </Text>
                <Text style={{fontSize:22,color:"#BEBBC9",paddingVertical:10}}>Upload your picture to help us customize your Mindscape</Text>
                <View style={styles.circle}>
            <Image style={styles.img} source={require('../../assets/images/group243.png')}/>
            <View style={{flex:0,alignItems:"center",position:"absolute",top:"95%",left:"36%"}}>
            <View style={styles.btn}>
                <Text style={{textAlign:"center",fontSize:12,color:"#6E6E84"}}>Upload</Text>
            </View>
            </View>
            </View>
            <Text style={{fontSize:14,color:"#E39684",textAlign:'center',paddingTop:20}}>It take up to 24hrs to {'\n'} update your parsona</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('PersonaVirtue')}
                    // backgroundColor="#9493AD"
                    backgroundColor={'transparent'}
                />
            </View>
        </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#9493AD",
        paddingHorizontal: "12%"
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
    },
    circle:{
        borderWidth:1,
        borderRadius:140,
        borderColor:"#A09EB4",
        width:"80%",
        height:"40%",
        marginTop:10,
        flex:0,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15
    },
    btn:{
        backgroundColor:"#2F2F40",
        width:70,
        paddingVertical:5,
        borderRadius:30
    },
    img:{
        width:"90%",
        height:"100%",
        marginLeft:10
    }
})