import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Styles from './components/Styles'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassword from './components/UserNameandPassword'
import UserNamePassword from './components/UserNamePassword'
import AlertComponent from './components/AlertComponent'


const App = () => {
 
  return (
    <View style = {styles.container}>
      {/* <Logo/> */}
     
      {/* <User/> */}
      
      {/* <LotsOfGreetings/> */}

      {/* <MyCustomTextWith/> */}

      {/* <Count/> */}

      {/* <InputText/> */}
      
      {/* <UserNameandPassword/> */}

      {/* <UserNamePassword/> */}

      <AlertComponent/>

      
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'
  }
})