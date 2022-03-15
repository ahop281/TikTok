import { useEffect, useRef} from 'react'

export default function ScrollTop({ contentRef }) {
    const scrollBtnRef = useRef()

    const onClickScroll = () => {
        contentRef.current.scrollTop = 0
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (contentRef.current.scrollTop > 100) scrollBtnRef.current.style.transform = 'translateY(-64px)'
            else scrollBtnRef.current.style.transform = 'translateY(0)'

        }

        contentRef.current.addEventListener('scroll', scrollHandler)

        return () => {
            contentRef.current.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div>
            <button
                className="fixed bottom-[-50px] right-6 transition-transform"
                ref={scrollBtnRef}
                onClick={onClickScroll}
            >
                <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#FE2C55] hover:brightness-95">
                    <i className="text-white text-lg fa-solid fa-arrow-up"></i>
                </div>
            </button>
        </div>
        
    )
}
