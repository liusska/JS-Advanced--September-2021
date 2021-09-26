function solve(arr) {
    let countSongs =  arr.shift();
    let list = arr.pop();

    const playlists = {};

    for (let el of arr){
        let [typeList, nameSong, time] = el.split('_');
        if (playlists[typeList] === undefined){
            playlists[typeList] = []
        }
        playlists[typeList].push([nameSong, time])
    }

    if (list !== 'all'){
        for (const key of Object.keys(playlists)){
            if (key === list){
                for (let song of (playlists[key])){
                    console.log(song[0])
                }
            }
        }
    }else{
        for(let key of Object.keys(playlists)){
            console.log(playlists[key][0][0]);
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])