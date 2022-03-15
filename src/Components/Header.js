import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../scss/Header.scss'

import { useModalContext } from '../hooks'

function Header() {
    const [searchValue, setSearchValue] = useState('')

    const ToggleShowModal = useModalContext()

    return (
        <div className="z-10 w-full min-w-[800px] h-[60px] border-2 bg-white border-b-gray-200 fixed top-0">
            <div className="flex justify-between items-center m-auto pl-6 pr-5 max-w-[1150px] h-[100%]">
                <Link to="/">
                    <div className="text-[28px] ">
                        <i className="fab fa-tiktok"></i>
                        <b className="ml-1 font-bold">TikTok</b>
                    </div>
                </Link>

                <form>
                    <div className="flex justify-between items-center py-2 px-4 rounded-3xl min-w-[360px] bg-gray-100">
                        <input
                            className="flex-1 text-gray-600 bg-gray-100 outline-none"
                            placeholder="Tìm kiếm tài khoản và video" 
                            type="text" 
                            name="searchValue"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <div className="flex items-center">
                            <span className="mr-3 w-[2px] h-7 bg-gray-300"></span>
                            <button className="text-xl text-[#a7a7ab]" type="submit" value="Submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <nav className="flex-row items-center">
                    <Link className="font-bold hover:underline" to="/not-update">Tải lên</Link>
                    <button
                        className="cursor-pointer ml-4 py-[6px] px-2 rounded-[4px] font-bold text-white bg-[#FE2C55]"
                        onClick={ToggleShowModal}
                    >Đăng nhập</button>
                    <div id="header-option">
                        <button className="cursor-pointer px-3 text-xl">
                            <i className="fas fa-ellipsis-v"></i>
                        </button>

                        <ul className="container">
                            <li>
                                <button className="w-full">
                                    <div className="option-item">
                                        <i className="fas fa-language"></i>
                                        <p className="ml-3 whitespace-nowrap">Tiếng Việt</p>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <Link className="w-full" to="/">
                                    <div className="option-item">
                                        <i className="fa-regular fa-circle-question"></i>
                                        <p className="ml-3 whitespace-nowrap">Phản hồi và trợ giúp</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <button className="w-full">
                                    <div className="option-item">
                                        <i className="fa-regular fa-keyboard"></i>
                                        <p className="ml-3 whitespace-nowrap">Phím tắt trên bàn phím</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header