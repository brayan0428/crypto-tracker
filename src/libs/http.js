export const get = async (url) => {
    try {
        const req = await fetch(url)
        const json = await req.json()
        return json
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const post = async (url, body) => {
    try {
        const req = await fetch(url, {
            method: 'post',
            body
        })
        const json = await req.json()
        return json
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}