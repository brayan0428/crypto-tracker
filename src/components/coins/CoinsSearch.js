import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Colors from '../../res/colors'

export default function CoinsSearch({onChange}) {
    return (
        <TextInput 
            style={styles.input}
            onChangeText={e => onChange(e)}
            placeholder="Search..."
            placeholderTextColor="#fff"
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: Colors.charade,
        color: "white"
    }
})
