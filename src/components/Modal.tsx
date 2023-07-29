import style from '../styles/modal.module.scss'
import { ItemType } from '../types/types'

interface ModalProps {
    selectedItem: ItemType,
    setIsModalOpen: (arg: boolean) => void,
    isModalOpen: boolean,
}

export const Modal = ({selectedItem, isModalOpen, setIsModalOpen} : ModalProps) => {

    const handleClose = () => {
        setIsModalOpen(false)
    }

    if (isModalOpen) return ( 
        <>
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <p>Produkt {selectedItem.title}</p>
                <img src={selectedItem.image.url}/>
                <button onClick={() => handleClose()}>CLOSE</button>
            </div>

        </div>
        </>
    )
    else return (
        <></>
    )
}