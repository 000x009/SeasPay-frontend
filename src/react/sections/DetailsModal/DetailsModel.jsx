import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Placeholder, Modal, Button, Divider } from "@telegram-apps/telegram-ui"
import { Icon28Close } from "@telegram-apps/telegram-ui/dist/icons/28/close"


export default function DetailsModal() {
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate()

    const handleCardDetails = () => {
        setModalActive(false)
        navigate("/payment-details/add?type=card")
    }

    const handleCryptoDetails = () => {
        setModalActive(false)
        navigate("/payment-details/add?type=crypto")
    }


    return (
        <div className="details_modal__container">
            {!modalActive && (
                <Button
                    size="l"
                    className='details_modal__main_button'
                    stretched 
                    onClick={() => {
                        setModalActive(true)
                    }}
                >
                    Добавить реквизиты
                </Button>
            )}
            <Modal
                open={modalActive}
                onOpenChange={setModalActive}
                aria-describedby="modal-description"
                header={
                    <Modal.Header 
                        after={
                            <Modal.Close onClick={() => setModalActive(false)} className='details_modal_close'>
                                <Icon28Close style={{color: 'var(--tgui--plain_foreground)'}} />
                            </Modal.Close>
                        }
                        before={
                            <Placeholder
                                header="Выберите тип реквизитов"
                                className='details_modal_placeholder'
                            />
                        }
                    >
                        Выберите тип реквизитов
                    </Modal.Header>
                }
                className='details_modal'
            >
                <Placeholder
                    id="modal-description"
                    className='details_modal_content__container'
                >
                    <Divider className='details_modal_divider'/>
                    <Button
                        size="l"
                        className='details__button'
                        stretched 
                        onClick={handleCardDetails}
                    >
                        Карта
                    </Button>
                    <Button
                        size="l"
                        className='details__button'
                        stretched 
                        onClick={handleCryptoDetails}
                    >    
                        Крипто
                    </Button>
                </Placeholder>
            </Modal>
        </div>
    )
}