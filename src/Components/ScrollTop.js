import { useEffect, useRef} from 'react'

export default function ScrollTop({ container }) {
    const scrollBtnRef = useRef()

    const onClickScroll = () => {
        container.scrollTop = 0
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (container?.scrollTop > 100) scrollBtnRef.current.style.transform = 'translateY(-64px)'
            else scrollBtnRef.current.style.transform = 'translateY(0)'

        }

        container?.addEventListener('scroll', scrollHandler)

        return () => {
            container?.removeEventListener('scroll', scrollHandler)
        }
    }, [container])

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
