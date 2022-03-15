import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../scss/SideBar.scss'

import { useModalContext } from '../hooks'

import { videos, links, discover } from '../data'


export default function SideBar() {
    let path = window.location.href.toString().split('/').pop()

    const [page, setPage] = useState(path)
    const [showMore, setShowMore] = useState(false)

    const ToggleShowModal = useModalContext()

    const toggleShowClick = () => {
        setShowMore(!showMore)
    }

    return (
        <div id="sidebar" className="w-[356px] h-screen-sidebar overflow-hidden overflow-y-scroll fixed top-[60px]">
            <div className="pt-[20px] pb-6 pl-3 flex flex-col justify-center items-center">
                <nav className="flex flex-col w-full">
                    <Link 
                        className={"sidebar-item sidebar-item-hover" + (page === 'TikTok' ? ' active' : '')} 
                        to='/TikTok' 
                        onClick={() => {if (page !== 'TikTok') setPage('TikTok')}}
                    >
                        <i className="fas fa-home"></i>
                        <span className="ml-3 max-w-hidden">Dành cho bạn</span>
                    </Link>
                    <Link
                        className={"sidebar-item sidebar-item-hover" + (page === 'following' ? ' active' : '')}
                        to='/TikTok/following'
                        onClick={() => {if (page !== 'following') setPage('following')}}
                    >
                        <i className="fas fa-user-friends"></i>
                        <span className="ml-3 max-w-hidden">Đang Follow</span>
                    </Link>
                    <Link 
                        className={"sidebar-item sidebar-item-hover" + (page === 'live' ? ' active' : '')} 
                        to='/TikTok/live'
                        onClick={() => {if (page !== 'live') setPage('live')}}
                    >
                        <i className="fas fa-video"></i>
                        <span className="ml-3 max-w-hidden">LIVE</span>
                    </Link>
                </nav>

                <span className="vertical-line max-w-hidden"></span>

                <div className="my-4 px-2 max-w-hidden">
                    <p className="font-light text-gray-500">Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <button
                        className="mt-4 py-2 w-full text-lg font-semibold body-btn"
                        onClick={ToggleShowModal}
                    >Đăng nhập</button>
                </div>

                {page === '' && 
                <>
                    <span className="vertical-line"></span>

                    <div id="user-recommend" className="my-2 w-full">
                        <p className="px-2 text-sm font-medium text-gray-600 max-w-hidden">Tài khoản được đề xuất</p>
                        <ul className="mt-3">
                            {
                                videos.map((item, index) => {
                                    if (showMore || (!showMore && index < 5)) {
                                        return (
                                            <li key={index} className="sidebar-item-hover">
                                                <Link className="flex items-center px-2 py-[4px] w-full" to="/TikTok">
                                                    <div>
                                                        <img className="mr-3 w-[32px] rounded-full" src={item.avt} alt="avatar" />
                                                    </div>
                                                    <div className="max-w-hidden">
                                                        <p className="font-bold">{item.name} <i className="text-[#20d5ec] fas fa-check-circle"></i></p>
                                                        <p className="font-thin text-xs">{item.subName}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    }
                                    else return ''
                                })
                            }
                        </ul>

                        <button className="mt-3 px-2 text-sm font-semibold text-[#fe2c55] max-w-hidden" onClick={toggleShowClick}>
                            {showMore ? 'Ẩn bớt' : 'Xem tất cả'}
                        </button>
                    </div>
                </>}

                <span className="vertical-line max-w-hidden"></span>

                <div className="py-1 px-2 w-full max-w-hidden">
                    <span className="text-sm font-semibold text-gray-600">Khám phá</span>
                    <div className="mt-4 flex flex-wrap">
                        {
                            discover.map((item, index) => {
                                let iconClassName 
                                if (item.type === 'tag') iconClassName = 'fas fa-hashtag'
                                else iconClassName = 'fab fa-itunes-note'

                                return (
                                    <Link key={index} className="max-w-full w-fit" to="/TikTok/not-update">
                                        <span className="discover-item">
                                            <i className={iconClassName}></i>
                                            <p>{item.title}</p>
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                
                <span className="vertical-line max-w-hidden"></span>

                <div className="mt-2 px-2 max-w-hidden">
                    <div className="flex flex-wrap mb-2">
                        {
                            links.informations.map((link, index) => 
                                <Link key={index} className="description-item description-item-hover" to="/TikTok/not-update">
                                    {link.title}
                                </Link>
                            )
                        }
                    </div>
                    <div className="flex flex-wrap mb-2">
                        {
                            links.others.map((link, index) => 
                                <Link key={index} className="description-item description-item-hover" to="/TikTok/not-update">
                                    {link.title}
                                </Link>
                            )
                        }
                    </div>
                    <div className="flex flex-wrap mb-2">
                        {
                            links.support.map((link, index) => 
                                <Link key={index} className="description-item description-item-hover" to="/TikTok/not-update">
                                    {link.title}
                                </Link>
                            )
                        }
                    </div>
                    <span id="more-container" className="relative mb-2">
                        <button className="description-item">Thêm</button>
                        <div id="more" className="absolute bg-white shadow-lg rounded-md">
                            <Link to="/TikTok/not-update">
                                <p className="font-semibold">NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</p>
                            </Link>
                        </div>
                    </span>
                    <div className="description-item">
                        <i className="far fa-copyright"></i>
                        <span>2022 TikTok</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
