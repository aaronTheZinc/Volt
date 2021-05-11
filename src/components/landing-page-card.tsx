import  React,{ FC } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'


export const LandingPageSignUpCard = (): JSX.Element => {
    
    return (
      <View style={Styles.container}>
          <View style={Styles.subContainer}>
            <TextInput />
          </View>
      </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    subContainer: {

    }
})
