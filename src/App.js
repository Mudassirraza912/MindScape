import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import { Emergency2 } from './screens/Emergency/Emergency2'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
      {/* <Emergency2 /> */}
    </>
  )
}

export default App
