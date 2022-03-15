import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../scss/Video.scss"
import { useElementOnScreen, useModalContext } from "../hooks"

function Video( props ) {
    const [playing, setPlaying] = useState(!props.play)
    const [muted, setMuted] = useState(props.play)

    const ToggleShowModal = useModalContext()
    
    const videoRef = useRef(null)
    const options = {
        root: null,
        rootMargin: '60px 0px 0px 0px',
        threshold: 0.7
    }
    const isVisible = useElementOnScreen(options, videoRef)
    
    const convert = num => {
        if (num > 10**6) return ((num - num%10**4)/10**6).toString() + "M"
        if (num > 10**4) return ((num - num%10**2)/10**3).toString() + "K"
        return num.toString()
    }

    const onPlayClick = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } 
        else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    const onVolumeClick = () => {
        if (muted) setMuted(false)
        else setMuted(true)
    }

    useEffect(() => {
        if (isVisible) {
            const onTabChange = () => {
                if (document.hidden) {
                    if (playing) {
                        videoRef.current.pause()
                        setPlaying(false)
                    } 
                }
                else {
                    if (!playing) {
                        videoRef.current.play()
                        setPlaying(true)
                    }
                }
            }

            document.addEventListener("visibilitychange", onTabChange)
            
            return () => {
                document.removeEventListener("visibilitychange", onTabChange)
            }
        }
    }, [playing])

    useEffect(() => {
        if (isVisible) {
            if (!playing) {
                videoRef.current.load()
                videoRef.current.play()
                setPlaying(true)
            }
        }
        else {
            if (playing) {        
                videoRef.current.pause()
                setPlaying(false)
            }
        }

    }, [isVisible])

    return (
        <div className="pr-4 w-full">
            <div className="flex items-start py-5">
                <Link to="/not-update">
                    <div className="w-14 rounded-full overflow-hidden">
                        <img className="w-full" src={props.avt} alt="avt" />
                    </div>
                    
                </Link>

                <div className="flex-1 ml-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link to="/not-update">
                                <span className="mr-2 font-bold text-lg hover:underline">{props.name}</span>
                                <span className="font-light text-base">{props.subName}</span>
                            </Link>
                            <p>{props.caption}</p>
                        </div>

                        <button className="body-btn px-5 text-base font-semibold" onClick={ToggleShowModal}>
                            Follow
                        </button>
                    </div>

                    <a href={props.songUrl}>
                        <div className="mt-1 mb-3">
                            <i className="fab fa-itunes-note"></i>  
                            <span className="ml-2 font-semibold hover:underline">{props.songName}</span>
                        </div>
                    </a>

                    <div className="flex items-end">
                        <div className="video-container">
                            <video  
                                className="max-h-[516px] max-w-full rounded-lg overflow-hidden"
                                preload="none"
                                loop
                                ref={videoRef}
                                poster={props.poster}
                                muted={muted}
                                src={props.src}
                            />

                            <div className="btns-container">
                                <button className="video-btn top-5 right-4 flex items-center">
                                    <i className="text-xs fa-regular fa-flag"></i>
                                    <span className="ml-2 font-semibold">Báo cáo</span>
                                </button>

                                <button className="video-btn left-4 bottom-6 text-xl" onClick={onPlayClick}>
                                    {!playing && <i className="fa-solid fa-play"></i>}
                                    {playing && <i className="fa-solid fa-pause"></i>}
                                </button>

                                <button className="video-btn right-4 bottom-6 text-xl" onClick={onVolumeClick}>
                                    {!muted && <i className="fa-solid fa-volume-high"></i>}
                                    {muted && <i className="fa-solid fa-volume-xmark"></i>}
                                </button>

                            </div>
                        </div>

                        <div className="flex flex-col px-4 py-2">
                            <button
                                className="interact-btn"
                                onClick={ToggleShowModal}
                            >
                            <div>
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <small>{convert(props.likes)}</small>
                            </button>
                            <button
                                className="interact-btn"
                                onClick={ToggleShowModal}
                            >
                            <div>
                                    <i className="fa-solid fa-comment-dots"></i>
                                </div>
                                <small>{convert(props.comments)}</small>
                            </button>
                            <button
                                className="interact-btn"
                                onClick={ToggleShowModal}
                            >
                            <div>
                                    <i className="fa-solid fa-share"></i>
                                </div>
                                <small>{convert(props.shares)}</small>
                            </button>
                        </div>
                    </div>

                </div>
                
            </div>
            
            <hr />
        </div>
    )
}

export default Video
