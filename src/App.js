import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import 'react-native-gesture-handler';
import CustomDrawer from './navigation/CustomDrawer/CustomDrawer'

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
        <MainNavigation />
      </Provider> */}
      <CustomDrawer />
    </>
  )
}

export default App
