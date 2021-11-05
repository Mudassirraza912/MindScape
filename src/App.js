import 'react-native-gesture-handler'
import React from 'react'
import {Text} from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { SleepHours } from './screens/SleepCount/sleepHours'
import { MorningMessage } from './screens/SleepCount/MorningMessage'
import { SleepMsg } from './screens/SleepCount/SleepMsg'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
      {/* <SleepMsg /> */}
    </>
  )
}

export default App
