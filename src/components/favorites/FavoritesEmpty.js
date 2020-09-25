import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../res/colors'

export default function FavoritesEmpty() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You don´t have any favorite yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontWeight:"bold",
        fontSize: 18
    }
})
