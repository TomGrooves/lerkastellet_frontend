import style from '../styles/modal.module.scss'

export const Modal = (props) => {

    const handleClose = () => {
        props.setIsModalOpen(false)
    }

    if (props.isModalOpen) return ( 
        <>
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <p>Produkt {props.selectedItem.title}</p>
                <img src={props.selectedItem.image.url}/>
                <button onClick={() => handleClose()}>CLOSE</button>
            </div>

        </div>
        </>
    )
    else return (
        <></>
    )
}