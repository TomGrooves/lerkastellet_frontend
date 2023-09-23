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
            <div>
              <p>Emne {selectedItem.title}</p>
              {selectedItem?.height ? <p>Højde: {selectedItem.height} cm</p> : null}
              {selectedItem?.width ? <p>Bredde: {selectedItem.width} cm</p> : null}
            </div>
            <img src={selectedItem.image.url} />
          </div>
        </div>
      </>
    );
  else return <></>;
};
