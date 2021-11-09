import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import NewmorphButton from '../../components/NewmorphButton/index'

const { height, width } = Dimensions.get('screen')
export const TourGuide = ({
    onChangeStep = (step) => {}
}) => {
    const [step, setStep] = useState(0)

    const onChange = () => {
        onChangeStep(step + 1)
        setStep(step + 1)
    }

    const main = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> 
                        Learn how you {"\n"}
                        dashboard works
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }


    const step1 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View style={styles.step1TargetContainer} /> 

                <View style={styles.step1Line} />
                <View style={{left: width* 0.09, top: 5}}>
                    <Text style={{color: "#fff"}}>
                        OBJECTIVE
                    </Text>
                    <Text style={{color: '#fff'}}>
                        Listen to your instructions for the week.
                    </Text>
                    <Text style={{color: '#E39684'}}>
                        It’s important for you to know what you {"\n"}are doing and why
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }


    const step2 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step1TargetContainer}>
                    <View style={styles.step2round} />
                </View> 
                <View style={styles.step2Line} />

                <View style={{left: width/1.8, top:0}}>
                    <Text style={{color: "#fff"}}>
                        OBJECTIVE
                    </Text>
                    <Text style={{color: '#fff'}}>
                        Adjust, add or remove
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>

            </View>
        )
    }


    const step3 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { navigation.navigate('BOB') }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step3Container}>
                    <View style={styles.step3Content}>
                        <Text style={{color: "#fff"}}>
                            TOOLBOX
                        </Text>
                        <Text style={{color: '#fff'}}>
                            All the tools you have explored
                        </Text>
                        <Text style={{color: '#E39684'}}>
                            Revisit
                        </Text>
                    </View>
                    <View style={styles.step3Line} />
                    <View style={styles.step3TargetArea}  />
                </View>

                {/* <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity> */}

            </View>
        )
    }



    return (
        //position: 'absolute', top: 0, bottom: 0,left: 0, right: 0
        <View style={{ flex: 1,  }}>
            <Modal
                transparent={true}
                visible={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(73, 72, 95, 0.8)' }}>
                    {step == 0 && main()}
                    {step == 1 && step1()}
                    {step == 2 && step2()}
                    {step == 3 && step3()}

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    crossStyle: {
        width: '95%',
        marginTop: height * 0.02,
        alignItems: 'flex-end'
        // position: 'absolute'
    },
    titleContainer: {
        left: width * 0.13,
        marginTop: height * 0.15,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    },
    mainneumorphBtn: {
        position: 'absolute',
        bottom: height * 0.09,
        alignSelf: 'center' ,
    },
    step1TargetContainer: {
        width: width+20,
        right: 10,
        top: height * 0.1,
        height: height * 0.19,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomRightRadius: height * 0.09,

    },
    step1Line: {
        height: height * 0.09,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.1,
        marginTop: height * 0.07
    },
    step2round: {
        top:  height * 0.038,
        borderWidth: 1,
        borderColor: '#fff',
        width: 50,
        height:50,
        borderRadius: 100,
        left: width/1.22,
    },
    step2Line: {
        height: height * 0.03,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.85,
        marginTop: height * 0.01
    },
    step3Container: {
        position: 'absolute', 
        bottom: (height * 0.07) + (height * 0.065) + (height * 0.122), 
        width: '100%' 
    },
    step3TargetArea : {
        borderRadius: 40, 
        borderWidth: 1, 
        borderColor: "#fff", 
        width: '80%', 
        height: height * 0.065, 
        top: (height * 0.05), 
        alignSelf: "center",
    },
    step3Line: {
        height: height * 0.06,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.2,
        top: (height * 0.05),
    },
    step3Content: {
        left: width* 0.18,
        top: (height * 0.04),
    }
})