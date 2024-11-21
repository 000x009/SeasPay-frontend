import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Placeholder, Image, Modal, Button, Divider } from "@telegram-apps/telegram-ui"
import { Icon28Close } from "@telegram-apps/telegram-ui/dist/icons/28/close"

import DetailsPageImage from "@/assets/images/details.png"
import DuckNotFound from "@/assets/gif/duck_not_found.gif"
import { Divider as DividerComponent } from "@/react/components/ui/Divider/Divider"

import "@/react/pages/PaymentDetails/PaymentDetails.css"
import "./PaymentDetails.css"

export function PaymentDetails() {
    const [modalActive, setModalActive] = useState(false);
    const [details, setDetails] = useState(null)
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
       <>
            {details ? (
                <div className="introducing_content__container">
                    <Placeholder
                        header="Ваши реквизиты"
                    className='payment_details_placeholder'
                />
                <Image
                    src={DetailsPageImage}
                    className='details_image'
                    style={{
                        width: "147px",
                        height: "105px",
                    }}
                />
                <div className="details_divider__container">
                    <DividerComponent className='details__divider'/>
                </div>
            </div>) : (
                <div className="payment_details_empty__container">
                    <Image
                        src={DuckNotFound}
                        className='details_empty_image'
                        style={{
                            width: "170px",
                            height: "170px",
                        }}
                    />
                    <Placeholder
                        header="У вас нет реквизитов((("
                        description="Добавьте их для возможности вывода средств через наш сервис"
                        className='payment_details_empty_placeholder'
                    />
                </div>
            )}
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
                            className='card_details__button'
                            stretched 
                            onClick={handleCardDetails}
                        >
                            Карта
                        </Button>
                        <Button
                            size="l"
                            className='crypto_details__button'
                            stretched 
                            onClick={handleCryptoDetails}
                        >    
                            Крипто
                        </Button>
                    </Placeholder>
                </Modal>
            </div>
        </>
    )
}