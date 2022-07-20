import { StyleSheet, Text, View, TouchableHighlight, 
    TouchableNativeFeedback, TouchableOpacity, 
    TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web';

const Touchable_Example = () => {
    const onPress = (msg) => {
        alert('Alert for: ' + msg);
    };

  return (
    <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
            <TouchableNativeFeedback
                style = {styles.button}
                onPress = {()=>onPress('TouchableNativeFeedback Pressed')} 
            >
                <View>
                    <Text>Touchable Native FeedBack(Only Android)</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableHighlight
                style = {styles.button}
                onPress = {()=>onPress('TouchableHighlight Pressed')} 
            >
                <View>
                    <Text>Touchable Highlight</Text>
                </View>
            </TouchableHighlight>

            <TouchableOpacity
                style = {styles.button}
                onPress = {()=>onPress('TouchableOpacity Pressed')} 
            >
                <View>
                    <Text>Touchable Opacity</Text>
                </View>
            </TouchableOpacity>

            <TouchableWithoutFeedback
                
                onPress = {()=>onPress('TouchableWithoutFeedback Pressed')} 
            >
                <View style = {styles.button}>
                    <Text>Touchable with out Feedback</Text>
                </View>
            </TouchableWithoutFeedback>

            
        </View>
    </SafeAreaView>
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});