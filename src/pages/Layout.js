import { useState, useRef} from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import Modal from '../Components/Modal'
import ScrollTop from '../Components/ScrollTop'

import { ModalContext } from '../Context'

export default function Layout() {
    const [showModal, setShowModal] = useState(true)

    const ToggleShowModal = () => {
        setShowModal(!showModal)
    }

    const contentRef = useRef()

    return (
        <ModalContext.Provider value={ToggleShowModal}>
            <div className="relative w-screen min-w-[800px] h-screen overflow-hidden">
                <Header />

                <div ref={contentRef} className="absolute top-[60px] h-screen-sidebar w-full overflow-hidden overflow-y-scroll scroll-smooth">
                    <div className="relative m-auto w-full max-w-[1150px]"> 
                        <SideBar page="home" />

                        <Outlet />

                        <ScrollTop contentRef={contentRef} />
                    </div>
                </div>

                {showModal && <Modal />}
            </div>

        </ModalContext.Provider>
    )
}
