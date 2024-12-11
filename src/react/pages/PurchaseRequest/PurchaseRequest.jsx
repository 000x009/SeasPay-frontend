import { useState } from "react";

import { Image, Placeholder } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import PlanetGIF from "@/assets/gif/planet.gif";
import { Input } from "@/react/components/inputs/Input/Input";
import { useSendPurchaseRequest } from "@/scripts/hooks/useSendPurchaseRequest";
import { useTelegram } from "@/scripts/hooks/useTelegram";
import "./PurchaseRequest.css";

export const PurchaseRequest = () => {
    const [link, setLink] = useState("");
    const [error, setError] = useState(false);
    const sendPurchaseRequest = useSendPurchaseRequest();
    const { WebApp } = useTelegram();

    const handleSubmit = () => {
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        
        if (link !== "" && urlRegex.test(link)) {
            sendPurchaseRequest.handleSendRequest(link, WebApp.initData);
        } else {
            setError(true);
        }
    };

    const handleChange = (e) => {
        setLink(e.target.value);
        setError(false);
    };

    return (
        <div className="purchase-request__container">
            <div className="purchase-request__header">
                <Image
                    src={PlanetGIF}
                    alt="planet"
                    className="purchase-request__planet-gif"
                    style={{
                        width: "120px",
                        height: "120px",
                    }}
                />
                <Placeholder
                    header="Оставьте ссылку на желаемую покупку и отправьте заявку"
                    description="После обработки вашей заявки администратором, вам придет сообщение в нашем боте с дальнейшими инструкциями"
                    className="purchase-request__placeholder"
                />
            </div>
            <div className="purchase-request__form">
                <Input
                    header="Ссылка на покупку"
                    status={error ? "error" : ""}
                    placeholder="https://www.example.com"
                    className="purchase-request__input"
                    value={link}
                    onChange={handleChange}
                />
            </div>
            <MainButton
                text="Отправить заявку"
                onClick={handleSubmit}
                progress={sendPurchaseRequest.isLoading}
            />
        </div>
    );
};