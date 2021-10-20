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
import { HomeWarning } from '../screens/Home/HomeWarning'
import { HomeRoutine } from '../screens/Home/HomeRoutine'
import { HomePersona } from '../screens/Home/HomePersona'
import { PersonaVirtue } from '../screens/Home/PersonaVirtue'
import { ToolsDashboard } from '../screens/Home/ToolsDashboard'

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

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
          <AppStack.Screen name="HomeWarning"  component={HomeWarning} />
          <AppStack.Screen name="HomeRoutine"  component={HomeRoutine} />
          <AppStack.Screen name="HomePersona"  component={HomePersona} />
          <AppStack.Screen name="PersonaVirtue"  component={PersonaVirtue} />
          <AppStack.Screen name="ToolsDashboard"  component={ToolsDashboard} />


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
