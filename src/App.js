import 'react-native-gesture-handler'
import React from 'react'
import { Text } from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { NotificationScreen2 } from './screens/NotificationScreens/NotificationScreen2'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  )
}

export default App
