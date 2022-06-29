import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'

const App = () => {
  const showData = () => {
    alert("Hello Button")
  }
  return (
    <View>
      <Logo/>
     
      <User/>
    </View>
    
  )
}

export default App