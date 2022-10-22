import episodes from '../data/friends-episodes.json'

export function getEpisodes() {
    return new Promise((res, rej) => {
        window.addEventListener("load", function () {
            setTimeout(() => {
                res(episodes.episode_in_season)
            }, 3000)
        })
    })
}