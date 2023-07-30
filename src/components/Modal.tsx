import style from "../styles/modal.module.scss";
import { ItemType } from "../types/types";

interface ModalProps {
  selectedItem: ItemType;
  setIsModalOpen: (arg: boolean) => void;
  isModalOpen: boolean;
}

export const Modal = ({
  selectedItem,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen)
    return (
      <>
        <div onClick={() => handleClose()} className={style.modalBackground}>
          <div className={style.modal}>
            <p>{selectedItem.title}</p>
            <img src={selectedItem.image.url} />
          </div>
        </div>
      </>
    );
  else return <></>;
};
