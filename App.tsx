import React from 'react'
import AppNavigator from './src/AppNavigator'
import "./global.css"
import Toast from 'react-native-toast-message';
const App = () => {
  return (<>
    <AppNavigator />
    <Toast />
  </>
  )
}

export default App