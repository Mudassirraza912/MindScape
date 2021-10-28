import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import VirtueButton from '../../components/VirtueButton/index'
import LinearGradient from 'react-native-linear-gradient';
export const PersonaVirtue = ({navigation}) => {
    return (
            <LinearGradient style={styles.container} colors={['#DED9DC','#A5A4BD']}>
            <View style={{flex:3.5,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"#A3A2BA",paddingTop:8}}>VIRTUES</Text>
            <Text style={styles.textdv}>You will develop these five virtues to manage your wellbeing</Text>
            <View style={{paddingVertical:5}}>
            <VirtueButton />
            </View>
            <View style={{paddingVertical:5}}>
            <VirtueButton title='CURIOSITY' />
            </View>
            <View style={{paddingVertical:5}}>
            <VirtueButton title='COURAGE' />
            </View>
            <View style={{paddingVertical:5}}>
            <VirtueButton title='GRATITUDE' />
            </View>
            <View style={{paddingVertical:5}}>
            <VirtueButton title="COMPASSION" />
            </View>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
            <NewmorphButton
                    onPress={() => navigation.navigate('HomeProgram')}
                    backgroundColor="#A5A4BD"
                />
                </View>
                </LinearGradient>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:"16%",
        paddingVertical:10
    },
    button:{
        marginVertical:10
    },
    textdv:{
        paddingBottom:14,
        paddingTop:6,
        fontSize:24,
        color:"#A3A2BA"
    }
})