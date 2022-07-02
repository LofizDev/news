import React,{useState,useEffect} from 'react'
import ScrollTop from './ScrollTop'
import { SongsData } from './SongsData'
function Music() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const [renderingSongs, setRenderingSongs] = useState()
    const [currentSong, setCurrentSong] = useState('')
    const [currentTopSongs, setCurrentTopSongs] = useState('Nhạc Trẻ')


    useEffect(() => {
        const getAllMusic = async () => {
            setLoading(true)
            await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0WGpSqnYR-rtXcdoH48kMqBwMhgtcjzjExN7e_EiCs5BZfdDqXkMz5SbI')
                .then(res => res.json())
                .then(data => setData(data.songs.top100_VN))
            setLoading(false)
        }
        getAllMusic()
    }, [])

    useEffect(() => {
        if (data && currentTopSongs === 'Nhạc Trẻ') setRenderingSongs(data[0])
        if (data && currentTopSongs === 'Trữ Tình') setRenderingSongs(data[1])
        if (data && currentTopSongs === 'Nhạc Trịnh') setRenderingSongs(data[2])
        if (data && currentTopSongs === 'EDM Việt') setRenderingSongs(data[5])
        if (data && currentTopSongs === 'Rap Việt') setRenderingSongs(data[4])
    }, [currentTopSongs, data])

    // const handleGetSong = async (item) => {
    //     // await setDataSong(item)
    //     setMusic(false)
    // }

    console.log('hey',data)
  return (
    <div className="musicContainer">
            {loading && (
               <h2>loading</h2>
               // <img style={{ marginTop: '30px', userSelect: 'none' }} src={musicLoading} alt="loading" />
            )}
            <ScrollTop/>

            {!loading && renderingSongs && (
                <>
                    <ul className="category">
                        {SongsData.map((item, index) => (
                            <li onClick={() => setCurrentTopSongs(item.name)} className="option"
                                key={index}>
                                <img className="coverCate" src={item.url} alt="song" />
                                <p style={{ fontWeight: '500' }}>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    {/* list musics */}
                    <div className="listSongs">
                        {renderingSongs.songs.slice(0, 70).map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentSong(item.music)}
                                id={item.music === currentSong ? 'activeSong' : 'inActiveSong'}
                                className="singleSong">
                                <div className="singleSongLeft" >
                                    <div className="songLeft">
                                        <img style={{ width: '65px', height: '65px', borderRadius: '12px', objectFit: 'cover' }}
                                            src={item.avatar}
                                            alt="song" />
                                    </div>
                                    <div className="songRight">
                                        <div className="songTitle">{item.title}</div>
                                        <div className="songAuthor">{item.creator}</div>
                                    </div>
                                </div>
                               
                            </div>
                        ))}
                    </div>
                    <video autoPlay={true} style={{ visibility: 'hidden', position: 'fixed', top: 0, left: 0, width: '20px', zIndex: -1, left: '-300px', backgroundColor: 'red' }} src={currentSong} controls />
                </>
            )}
        </div>
  )
}

export default Music