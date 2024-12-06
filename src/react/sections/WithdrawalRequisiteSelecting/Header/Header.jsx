import { Placeholder } from "@telegram-apps/telegram-ui"
import Lottie from "lottie-react"

import DuckNotFound from "@/assets/animations/duck-not-found.json"
import CardAnimation from "@/assets/animations/credit-card.json"

export function WithdrawalRequisiteSelectingHeader({ isRequisitesExist }) {
    return (
        <>
            {isRequisitesExist ? (
                <div className="introducing_content__container">
                <Placeholder
                    header="Выберите реквизиты для вывода средств"
                    className='withdrawal_requisites_placeholder'
                />
                    <Lottie
                        animationData={CardAnimation}
                        style={{
                            width: "150px",
                            height: "150px",
                        }}
                    />
                </div>) : (
                    <div className="introducing_content__container">
                        <Lottie
                            animationData={DuckNotFound}
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


