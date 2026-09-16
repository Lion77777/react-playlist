const apiKey = '917c56d4-a2b9-49f7-9760-57dcd872365e'
const headers = {
    'api-key': apiKey
}

export const getTrack = (id: string) => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + id, {
        headers: {
            'api-key': '917c56d4-a2b9-49f7-9760-57dcd872365e'
        }
    })
        .then(res => res.json())
}

export const getTracks = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers
    })
        .then(res => res.json())
}