import { useState } from 'react'
import { Link } from 'react-router-dom'

import LoginApi from '../data/Api/LoginApi'
import SignUpApi from '../data/Api/SignUpApi'
import { useModalContext } from '../hooks'

export default function Modal() {
    const [type, setType] = useState('login')
    const [showMore, setShowMore] = useState(false)

    const ToggleShowModal = useModalContext()

    return (
        <div className="absolute z-[10000] top-0 left-0 w-screen h-screen">
            <div className="w-full h-full flex justify-center items-center bg-black/50">
                <div className="relative w-[472px] h-[660px]">
                    <div className="flex flex-col justify-center w-full h-full pt-12 rounded-lg bg-white">
                        <button
                            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full"
                            onClick={ToggleShowModal}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>

                        {
                            type === 'login' && 
                            <>
                                <p className="text-center text-2xl font-bold">Đăng nhập vào TikTok</p>

                                <div className="mt-8 mb-4">
                                    <div className="mx-auto w-[320px] h-[466px] overflow-y-scroll">
                                        <ul>
                                            {
                                                LoginApi.map(api => (
                                                    <li key={api.id} className="mb-4 transition-colors hover:bg-black/5">
                                                        <Link to="/TikTok/not-update">
                                                            <div className="flex h-11">
                                                                <div className="flex justify-center items-center h-full w-11 border-[1px] border-black/10">
                                                                    <i className={`text-xl ${api.iconClassName}`}></i>
                                                                </div>
                                                                <div className="flex justify-center items-center h-full lin flex-1 border-[1px] border-black/10">
                                                                    <span className="text-sm text-center font-semibold">{api.title}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <hr />

                                <footer className="flex-1 flex items-center text-sm">
                                    <span className="ml-6 font-normal">Bạn không có tài khoản? </span>
                                    <button
                                        className="ml-2 font-semibold text-[#FE2C55]"
                                        onClick={() => setType('signup')}
                                    >Đăng ký</button>
                                </footer>
                            </>
                        }

                        {
                            type === 'signup' && 
                            <>
                                <p className="text-center text-2xl font-bold">Đăng ký TikTok</p>

                                <div className="mt-8 mb-4">
                                    <div className="mx-auto w-[320px] h-[466px] overflow-y-scroll">
                                        <ul>
                                            {
                                                SignUpApi.map((api, index) => {
                                                    if (showMore || index < 3) return (
                                                        <li key={api.id} className="mb-4 transition-colors hover:bg-black/5">
                                                            <Link to="/TikTok/not-update">
                                                                <div className="flex h-11">
                                                                    <div className="flex justify-center items-center h-full w-11 border-[1px] border-black/10">
                                                                        <i className={`text-xl ${api.iconClassName}`}></i>
                                                                    </div>
                                                                    <div className="flex justify-center items-center h-full lin flex-1 border-[1px] border-black/10">
                                                                        <span className="text-sm text-center font-semibold">{api.title}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )
                                                    else return ''
                                                })
                                            }
                                        </ul>

                                        {!showMore && <div className="flex justify-center">
                                            <button className="py-1 px-5" onClick={() => setShowMore(true)}>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </button>
                                        </div>}
                                    </div>
                                </div>

                                <hr />

                                <footer className="flex-1 flex items-center text-sm">
                                    <span className="ml-6 font-normal">Bạn đã có tài khoản? </span>
                                    <button
                                        className="ml-2 font-semibold text-[#FE2C55]"
                                            onClick={() => setType('login')}
                                    >Đăng nhập</button>
                                </footer>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
