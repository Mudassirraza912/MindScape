import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GetstartedMain } from '../screens/GetStarted/getStartedMain'
import { WalkThrough } from '../screens/GetStarted/WalkThrough'
import { Login } from '../screens/Login/login'
import { SignUp } from '../screens/SignUp/signup'
import { ForgotPassword } from '../screens/ForgotPassword/forgotpassword'
import { EmailVerification } from '../screens/EmailVerification/EmailVerification'
import { AccountSecure } from '../screens/AccountSecure/accountSecure'
import { Subscription } from '../screens/Subscription/subscription'
import { HomeWelcome } from '../screens/Home/Welcome'
import { HomeSetName } from '../screens/Home/HomeSetname'
import { HomeSetCountry } from '../screens/Home/HomeSetCountry'
import { HomeWarning } from '../screens/Home/HomeWarning'
import { HomeRoutine } from '../screens/Home/HomeRoutine'
import { HomePersona } from '../screens/Home/HomePersona'
import { PersonaVirtue } from '../screens/Home/PersonaVirtue'
import { ToolsDashboard } from '../screens/Home/ToolsDashboard'
import { Dashboard } from '../screens/Home/Dashboard'
import { Profile } from '../screens/Profile/Profile'
import { Setting } from '../screens/Setting/setting'
import { Emergency } from '../screens/Emergency/emergency'
import { HelpCenter } from '../screens/HelpCenter/helpcenter'
import { AboutUs } from '../screens/AboutUs/aboutus'
import { TermsCondition } from '../screens/TermsCondition/termsAndCondition'
import { PrivacyPolicy } from '../screens/PrivacyPolicy/privacyPolicy'
import { ContactUs } from '../screens/ContactUs/contactUs'
import { createDrawerNavigator } from '@react-navigation/drawer'

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
      <AuthStack.Screen name="GetStarted"  component={GetstartedMain} />
      <AuthStack.Screen name="WalkThrough"  component={WalkThrough} />
      <AuthStack.Screen name="Login"  component={Login} />
      <AuthStack.Screen name="SignUp"  component={SignUp} />
      <AuthStack.Screen name="ForgotPassword"  component={ForgotPassword} />
      <AuthStack.Screen name="EmailVerification"  component={EmailVerification} />

    </AuthStack.Navigator>
  );
}


function MainDrawer() {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 8, marginHorizontal: 8 },
      }}
      initialRouteName="Home"
      overlayColor="transparent"
      drawerType="front">
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Dashboard"  component={Dashboard}/>
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Profile"  component={Profile}/>
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Setting"  component={Setting}/>
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Emergency"  component={Emergency}/>
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="HelpCenter"  component={HelpCenter}/>
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="Subscription" component={Subscription} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="AboutUs" component={AboutUs} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen options={{ activeTintColor: "#fff" }} name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  )
}

function AppStackNavigator() {
  return(
    <AppStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AccountSecure">
        <AppStack.Screen name="AccountSecure"  component={AccountSecure} />
          <AppStack.Screen name="Subscription" component={Subscription} />
          <AppStack.Screen name="HomeWelcome"  component={HomeWelcome} />
          <AppStack.Screen name="HomeSetName"  component={HomeSetName} />
          <AppStack.Screen name="HomeSetCountry"  component={HomeSetCountry} />
          <AppStack.Screen name="HomeWarning"  component={HomeWarning} />
          <AppStack.Screen name="HomeRoutine"  component={HomeRoutine} />
          <AppStack.Screen name="HomePersona"  component={HomePersona} />
          <AppStack.Screen name="PersonaVirtue"  component={PersonaVirtue} />
          <AppStack.Screen name="ToolsDashboard"  component={ToolsDashboard} />
          <AppStack.Screen name="Dashboard"  component={MainDrawer} />
    </AppStack.Navigator>
  )
}


const MainNavigation = () => {
  const isLoggedin = false
  return (
    <NavigationContainer>
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
