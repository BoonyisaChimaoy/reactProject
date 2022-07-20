import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


const UserNamePassword = () => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const checkTextInput= () => {
        //Check for the Name TextInput
        if (!username.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!email.trim()) {
            alert('Please Enter Email');
            return;
        }
        //Checked Successfully•//Do whatever you want
        else {
            alert("email: "+ username + "\npassword: " + email)
        }
    };
  return (
    <View style = {styles.container}>
      <TextInput
        value={username}
        onChangeText = {(username) =>{setUsername(username)}}
        style = {styles.textInputStyle}
        placeholder='Enter Name'
      />
      <TextInput 
        value={email}
        onChangeText = {(email) =>{setEmail(email)}}
        style = {styles.textInputStyle}
        placeholder='Enter Email'
      />
      <Button 
        title='Submit'
        onPress={checkTextInput}
        color = "purple"/>
    </View>
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
  });