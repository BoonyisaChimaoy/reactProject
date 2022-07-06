import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web';

const UserNameandPassword = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const Data = () => {
        alert("email: "+ email + "\npassword: " + password)
      }
  return (
    <View>
      <TextInput
        value={email}
        onChangeText = {(email) =>{setEmail(email)}}
        style = {styles.textinput}
        placeholder='Email'
      />
      <TextInput
        value={password}
        onChangeText = {(password) =>{setPassword(password)}}
        style = {styles.textinput}
        placeholder='Password'
      />
      <Button 
        title='Submit'
        onPress={Data}
        color = "purple"/>
    </View>
  )
}

export default UserNameandPassword

const styles = StyleSheet.create({
    textinput : {
      width:300,
      height:45,
      padding:10,
      marginTop:20,
      marginBottom:10,
      backgroundColor:'#e8e8e8'
    },
    
  })