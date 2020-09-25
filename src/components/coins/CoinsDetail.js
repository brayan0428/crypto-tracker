import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { get, remove, store } from '../../libs/storage';
import { get as getHttp } from '../../libs/http'
import Colors from '../../res/colors';
import CoinsMarketItem from './CoinsMarketItem';

export default function CoinsDetail({route}) {
  const [markets, setMarkets] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const {coin} = route.params;

  const getSymbolIcon = (name) => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/16x16/${symbol}.png`;
    }
  };

  const getSections = (coin) => {
    const sections = [
      {
        title: 'Market Cap',
        data: [coin.volume24],
      },
      {
        title: 'Volume 24H',
        data: [coin.volume24],
      },
      {
        title: 'Change 24H',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  const getMarkets = async (id) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${id}`;
    const data = await getHttp(url);
    setMarkets(data);
  };

  const handleFavorite = async () => {
    const key = `favorite-coin-${coin.id}`
    if(isFavorite){
      const res = await remove(key)
      if(res) setIsFavorite(false)
    }else{
      const res = await store(key, JSON.stringify(coin))
      if(res) setIsFavorite(true)
    }
  }

  const getFavorite = async () => {
    try {
      const key = `favorite-coin-${coin.id}`
      const favorite = await get(key)
      if(favorite) setIsFavorite(true) 
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() => {
    getMarkets(coin.id);
    getFavorite()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image style={styles.icon} source={{uri: getSymbolIcon(coin.name)}} />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
        <Pressable
          onPress={handleFavorite}
          style={[
            styles.btnFavorite,
            !isFavorite ? styles.btnFavoriteAdd : styles.btnFavoriteRemove,
          ]}>
          <Text style={styles.btnText}>
            {!isFavorite ? 'Add Favorite' : 'Remove Favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.section}
        keyExtractor={(item) => item}
        sections={getSections(coin)}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.textItem}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.textHeader}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.textMarket}>Markets</Text>
      <FlatList
        style={styles.list}
        data={markets}
        renderItem={({item}) => <CoinsMarketItem item={item} />}
        horizontal={true}
        keyExtractor={(item) => `${item.name}-${item.quote}-${item.time}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  subHeader: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
  },
  icon: {
    width: 25,
    height: 25,
  },
  list: {
    maxHeight: 100,
    marginLeft: 10,
  },
  section: {
    maxHeight: 250,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sectionItem: {
    padding: 8,
  },
  textHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textItem: {
    color: '#fff',
    fontSize: 16,
  },
  textMarket: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: 'red',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
});
