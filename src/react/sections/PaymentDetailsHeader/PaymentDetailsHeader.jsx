import { Placeholder, Image } from "@telegram-apps/telegram-ui"

import DuckNotFound from "@/assets/gif/duck_not_found.gif"
import CardGIF from "@/assets/gif/card.gif"

export default function PaymentDetailsHeader({ isRequisitesExist }) {
    return (
        <>
            {isRequisitesExist ? (
                <div className="introducing_content__container">
                <Placeholder
                    header="Ваши реквизиты"
                    className='payment_details_placeholder'
                />
                    <Image
                        src={CardGIF}
                        className='details_image'
                        style={{
                        width: "150px",
                        height: "150px",
                    }}
                />
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
        </>
    )
}


