
import React from 'react'
import Video from '../Components/Video'
import { videos } from '../data'

export default function Home() {
    return (
        <div className="absolute right-0 z-1 py-6 w-[692px] max-w-[692px]">
            <div>
                {
                    videos.map((item, index) => (
                        <Video
                            key={item.id}
                            play={index === 0 ? true : false}
                            avt={item.avt}
                            name={item.name}
                            subName={item.subName}
                            caption={item.caption}
                            songName={item.songName}
                            songUrl={item.songUrl}
                            poster={item.poster}
                            src={item.src}
                            likes={item.likes}
                            comments={item.comments}
                            shares={item.shares}
                        />
                    ))
                }
            </div>
        </div>
    )
}
