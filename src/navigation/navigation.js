import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GetstartedMain } from '../screens/GetStarted/getStartedMain'
import { WalkThrough } from '../screens/GetStarted/WalkThrough'
import { Login } from '../screens/Login/login'
import { SignUp } from '../screens/SignUp/signup'
import { OtpVerification } from '../screens/OtpVerification/OtpVerification'
import { EmailVerification } from '../screens/EmailVerification/EmailVerification'
import { FreeTrialSubscription } from '../screens/FreeTrialSubscription/freeTrialSubscription'
import { AccountSecure } from '../screens/AccountSecure/accountSecure'
import { AccountSetting } from '../screens/AccountSecure/accountSetting'
import { Account } from '../screens/AccountSecure/account'
import { Subscription } from '../screens/Subscription/subscription'
import { HomeWelcome } from '../screens/Home/Welcome'
import { HomeSetName } from '../screens/Home/HomeSetname'
import { HomeSetCountry } from '../screens/Home/HomeSetCountry'
import { HomeWarning } from '../screens/Home/HomeWarning'
import { HomeCommitment } from '../screens/Home/HomeCommitment'
import { HomeRoutine } from '../screens/Home/HomeRoutine'
import { HomePersona } from '../screens/Home/HomePersona'
import { PersonaVirtue } from '../screens/Home/PersonaVirtue'
import { HomeProgram } from '../screens/Home/HomeProgram'
import { ToolsDashboard } from '../screens/Home/ToolsDashboard'
import { Dashboard } from '../screens/Home/Dashboard'
import { Preference } from '../screens/Preference/Preference'
import { MainAcount } from '../screens/MainAcount/MainAcount'
import { Profile } from '../screens/Profile/Profile'
import { Setting } from '../screens/Setting/setting'
import { Emergency } from '../screens/Emergency/emergency'
import { HelpCenter } from '../screens/HelpCenter/helpcenter'
import { AboutUs } from '../screens/AboutUs/aboutus'
import { TermsCondition } from '../screens/TermsCondition/termsAndCondition'
import { PrivacyPolicy } from '../screens/PrivacyPolicy/privacyPolicy'
import { ContactUs } from '../screens/ContactUs/contactUs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from './CustomDrawer/CustomDrawer'

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()
const Drawer = createDrawerNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="GetStarted">
      <AuthStack.Screen name="GetStarted" component={GetstartedMain} />
      <AuthStack.Screen name="WalkThrough" component={WalkThrough} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="OtpVerification" component={OtpVerification} />
      <AuthStack.Screen name="AccountSecure" component={AccountSecure} />
      <AuthStack.Screen name="AccountSetting" component={AccountSetting} />
      <AuthStack.Screen name="Account" component={Account} />
      <AuthStack.Screen name="FreeTrialSubscription" component={FreeTrialSubscription} />
      <AuthStack.Screen name="EmailVerification" component={EmailVerification} />




    </AuthStack.Navigator>
  );
}


function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
      }}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "100%",
        },
      }}
      initialRouteName="Home"
      overlayColor="transparent"
      drawerType="front">
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Dashboard" component={Dashboard} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Preference" component={Preference} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="MainAcount" component={MainAcount} />

      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Emergency" component={Emergency} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="HelpCenter" component={HelpCenter} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Subscription" component={Subscription} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="AboutUs" component={AboutUs} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  )
}

function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <AppStack.Screen name="Subscription" component={FreeTrialSubscription} />
      <AppStack.Screen name="HomeWelcome" component={HomeWelcome} />
      <AppStack.Screen name="HomeSetName" component={HomeSetName} />
      <AppStack.Screen name="HomeSetCountry" component={HomeSetCountry} />
      <AppStack.Screen name="HomeWarning" component={HomeWarning} />
      <AppStack.Screen name="HomeCommitment" component={HomeCommitment} />
      <AppStack.Screen name="HomeRoutine" component={HomeRoutine} />
      <AppStack.Screen name="HomeProgram" component={HomeProgram} />
      <AppStack.Screen name="HomePersona" component={HomePersona} />
      <AppStack.Screen name="PersonaVirtue" component={PersonaVirtue} />
      <AppStack.Screen name="ToolsDashboard" component={ToolsDashboard} />
      <AppStack.Screen name="Dashboard" component={MainDrawer} />
      <AuthStack.Screen name="AccountSetting" component={AccountSetting} />
      <AuthStack.Screen name="Account" component={Account} />
    </AppStack.Navigator>
  )
}


const MainNavigation = () => {
  const isLoggedin = false
  return (
    <NavigationContainer theme={{ ...DefaultTheme, dark: true, }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedin ?
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={AuthStackNavigator}
          />
          :
          <Stack.Screen
            name="AppStack"
            options={{ headerShown: false }}
            component={AppStackNavigator}
          />}
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
