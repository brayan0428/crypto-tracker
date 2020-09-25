import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CoinsMarketItem({item}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.price_usd}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    text: {
        color: "#fff",
        fontSize: 14
    }
})
