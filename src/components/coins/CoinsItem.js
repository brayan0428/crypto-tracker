import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Colors from '../../res/colors'

export default function CoinsItem({item, onPress}) {
    
    const getImage = () => {
        if(item.percent_change_1h <= 0) return require('../../assets/img/arrow_down.png')
        return require('../../assets/img/arrow_up.png')
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{`$ ${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{item.percent_change_1h}</Text>
                <Image source={getImage()} style={styles.img} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: Colors.charade,
        borderBottomWidth: 1,
        borderBottomColor: Colors.zircon,
        justifyContent: "space-between"
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
    symbolText:{
        fontSize: 16,
        color: "#fff",
        marginRight: 12
    },
    text: {
        color: "#fff",
        marginRight: 12,
        fontSize: 14
    },
    img:{
        width: 16,
        height: 16
    }
})
