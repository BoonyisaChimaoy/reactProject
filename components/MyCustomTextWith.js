import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({fname1,lname1,fname2,lname2}) => {
    return(
        <View >
            <Text>Your First Name is {fname1} and Last Name is {lname1}</Text>
            <Text>Your First Name is {fname2} and Last Name is {lname2}</Text>
        </View>
    )
};

const MyCustomTextWith = () => {
  return (
    <View>
        <Greeting fname1 = 'Boonyisa' lname1 = 'Chimaoy' fname2 = 'Phattanit' lname2 = 'Kongsib'/>
        
    </View>
  )
}

export default MyCustomTextWith