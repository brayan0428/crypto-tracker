import AsyncStorage from '@react-native-community/async-storage'

export const store = async (key, value) => {
    try {
        await AsyncStorage.setItem(key,value)        
        return true
    } catch (error) {
        console.log('Error storage store', error)
        return false
    }
}

export const get = async key => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
        console.log('Error storage get', error)
        throw Error(error)
    }
}

export const remove = async key => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (error) {
        console.log('Error storage remove', error)
        return false
    }
}

export const getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys()
    } catch (error) {
        console.log('Error storage getAllKeys', error)
        throw Error(error)
    }
}

export const multiGet = async (keys) => {
    try {
        return await AsyncStorage.multiGet(keys)        
    } catch (error) {
        console.log('Error storage getAllKeys', error)
        throw Error(error)
    }
}