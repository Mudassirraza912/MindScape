import React from 'react'
import { View, Text, StyleSheet, StatusBar,} from 'react-native'
import { TouchableOpacity,  } from 'react-native-gesture-handler'

export const ForgotPassword = ({navigation}) => {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor={'#9493AD'} />
        <View style={styles.mainContainer}>
            <View style={styles.ContainerView}>
                <Text style={{color:"#fff", fontSize:24, textAlign:"center"}}>
                    Enter 4 digit code {'\n'}to authenticate
                </Text>
                <Text style={{color:"#000", fontSize:16, textAlign:"center"}}>
                     Check your email
                </Text>
            </View>
            <View style={styles.ContainerView}>
                <Text style={{color:"#fff", fontSize:48, textAlign:"center"}}>
                    0000
                </Text>                
            </View>
            <View style={styles.ContainerView}>
                <Text style={{color:"#fff", fontSize:48, textAlign:"center"}}>
                    0000
                </Text>                
            </View>
            {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Forgot password page
                </Text>
                <TouchableOpacity  onPress={() => navigation.navigate('EmailVerification')}>
                    <Text>
                        NEXT PAGE
                    </Text>
                </TouchableOpacity>
            </View> */}
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#9493AD',  
    },
    ContainerView:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
  
})