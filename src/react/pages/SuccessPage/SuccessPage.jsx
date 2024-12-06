import { useLocation, useNavigate } from "react-router-dom"

import { MainButton } from "@vkruglikov/react-telegram-web-app"
import { Placeholder, Image } from "@telegram-apps/telegram-ui"

import MoneyGIF from "../../../assets/gif/money.gif"
import { successTypeText } from "../../../constants/successTypeText"
import "./SuccessPage.css"

export function SuccessPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const successType = location.state?.successType

    return (
        <div className="success_page_container">
            <Placeholder
                header={successTypeText[successType]}
                className="success_page_placeholder"
            >
                <Image
                    src={MoneyGIF}
                    className="success_page_image"
                    style={{
                        width: "150px",
                        height: "150px"
                    }}
                />
            </Placeholder>
            <MainButton text="OK" onClick={() => navigate("/")} />
        </div>
    )
}
