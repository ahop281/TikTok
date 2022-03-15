import { useContext } from 'react'
import { ModalContext } from '../Context'

function useModalContext() {
    return useContext(ModalContext)
}

export default useModalContext