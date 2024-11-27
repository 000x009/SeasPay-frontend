import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Text, Caption } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import CardIcon from "@/assets/icons/top_up_card.svg?react";
import { Copy } from "@/react/components/inputs/Copy/Copy";
import { FileSection } from "@/react/sections/FileSection/FileSection";
import { useCreatePlatformProductOrder } from "@/scripts/hooks/useCreatePlatformProductOrder";
import "./CardPage.css";


export function CardPage({ formData, productId }) {
    const [files, setFiles] = useState([]);
    const createProductOrder = useCreatePlatformProductOrder();

    const handleMainButtonClick = async () => {
        if (files.length === 0) {
            return;
        }
        await createProductOrder.handleCreatePlatformProductOrder(formData, files[0], productId);
    };

    return (
        <div className="card-page">
            <div className="card-page__icon-container">
                <CardIcon className="card-page__card-icon" />
            </div>
            <div className="card-page__title-container">
                <Text weight="2">
                    Сделайте перевод денежных средств по предоставленным реквизитам ниже и прикрепите фото чека
                </Text>
            </div>
            <div className="card-page__copy-container">
                <Caption className="card-page__caption" weight="2" level="1">Тинькофф (Михаил Ш.)</Caption>
                <Copy text="4276 4000 0000 0000"/>
            </div>
            <div className="attachment-container">
                <FileSection
                    files={files}
                    setFiles={setFiles}
                />
            </div>
            <MainButton text="Готово" onClick={handleMainButtonClick} progress={createProductOrder.isLoading}/>
        </div>
    );
}