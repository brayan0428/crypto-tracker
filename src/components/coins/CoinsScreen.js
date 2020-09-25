import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { onChange } from 'react-native-reanimated'
import { get } from '../../libs/http'
import Colors from '../../res/colors'
import CoinsItem from './CoinsItem'
import CoinsSearch from './CoinsSearch'

export default function CoinsScreen({navigation}) {
    const [coins, setCoins] = useState([])
    const [allCoins, setAllCoins] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCoins()
    }, [])

    const getCoins = async () => {
        setLoading(true)
        const json = await get('https://api.coinlore.net/api/tickers/')
        setCoins(json.data)
        setAllCoins(json.data)
        setLoading(false)
    }

    const handlePress = (coin) => {
        navigation.navigate('CoinsDetail', {coin})
    }

    const onChange = query => {
        const filteredCoins = allCoins.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
        setCoins(filteredCoins)
    }

    return (
        <View style={styles.container}>
            <CoinsSearch onChange={onChange}/>
            {
                loading && <ActivityIndicator style={styles.loader} color="#fff" size="large"/>
            }
            <FlatList 
                data={coins}
                renderItem={
                    ({item}) => <CoinsItem item={item} onPress={() => handlePress(item)}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    loader: {
        marginTop: 50
    }
})
