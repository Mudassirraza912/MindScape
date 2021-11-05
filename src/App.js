import 'react-native-gesture-handler'
import React from 'react'
import {Text} from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { SleepHours } from './screens/SleepCount/sleepHours'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
      {/* <SleepHours /> */}
    </>
  )
}

export default App
