import { Placeholder, Image } from "@telegram-apps/telegram-ui"

import DuckNotFound from "@/assets/gif/duck_not_found.gif"
import CardGIF from "@/assets/gif/card.gif"

export function WithdrawalRequisiteSelectingHeader({ isRequisitesExist }) {
    return (
        <>
            {isRequisitesExist ? (
                <div className="introducing_content__container">
                <Placeholder
                    header="Выберите реквизиты для вывода средств"
                    className='withdrawal_requisites_placeholder'
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
                    <div className="withdrawal_requisites_empty__container">
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
                            description="Добавьте их для возможности вывода средств"
                            className='withdrawal_requisites_placeholder'
                        />
                    </div>
                )}
        </>
    )
}


