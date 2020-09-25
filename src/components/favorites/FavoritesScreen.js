import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { getAllKeys, multiGet } from '../../libs/storage'
import Colors from '../../res/colors'
import CoinsItem from '../coins/CoinsItem'
import FavoritesEmpty from './FavoritesEmpty'

export default function FavoritesScreen({navigation}) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getFavorites()
        navigation.addListener("focus", getFavorites)
        return () => {
            navigation.removeListener("focus", getFavorites)
        }
    }, [])

    const getFavorites = async () => {
        try {
            const allKeys = await getAllKeys()
            const keys = allKeys.filter(key => key.includes('favorite-'))
            const favs = await multiGet(keys)
            const favorites = favs.map(f => JSON.parse(f[1]))
            setFavorites(favorites)
        } catch (error) {
            console.log('Error get favorites', error)
        }
    }

    const handlePress = (coin) => {
        navigation.navigate('CoinsDetail', {coin})
    }

    return (
        <View style={styles.container}>
            {
                favorites.length <= 0
                ? <FavoritesEmpty />
                : <FlatList 
                    data={favorites}
                    renderItem={({item}) => <CoinsItem item={item} onPress={() => handlePress(item)}/>}
                  />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    }
})
