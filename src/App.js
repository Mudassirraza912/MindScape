import 'react-native-gesture-handler'
import React from 'react'
import { Text } from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { SleepHours } from './screens/SleepCount/sleepHours'
import { PYT2 } from './screens/PYTScreens/PYT2'

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
        <MainNavigation />
      </Provider> */}
      <PYT2 />
    </>
  )
}

export default App
