import React from 'react'
import { Link } from 'react-router-dom'

export default function User( props ) {
    return (
        <div className="relative mr-[18px] mb-[18px] w-[226px] h-[302px] rounded-lg overflow-hidden">
            <img className="min-w-[226px] min-h-[320px] aspect-auto" src={props.poster} alt="avt" />
            <div className="absolute top-0 left-0 w-full h-full">
                <Link to="/not-update">
                    <div className="flex flex-col justify-end items-center py-6 w-full h-full text-white">
                        <img className="w-12 h-12 rounded-full" src={props.avt} alt="avt" />
                        <div className="mt-3 font-bold">
                            <p className="text-xl">{props.subName}</p>
                            <p className="text-center">{props.name}</p>
                        </div>
                        <button className="mt-2 min-w-[164px] min-h-[36px] rounded text-lg bg-[#FE2C55] font-semibold hover:brightness-95">Follow</button>
                    </div>

                </Link>
            </div>
        </div>
    )
}
