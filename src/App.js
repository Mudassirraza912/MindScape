import 'react-native-gesture-handler'
import React from 'react'
import { Text } from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { PYT4 } from './screens/PYTScreens/PYT4'
import { HomeWelcome } from './screens/Home/Welcome'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
      {/* <MorningMessage /> */}
    </>
  )
}

export default App
