import { useState } from "react";

import { Text, Caption } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import CardIcon from "@/assets/icons/top_up_card.svg?react";
import { Copy } from "@/react/components/inputs/Copy/Copy";
import { FileSection } from "@/react/sections/FileSection/FileSection";
import "./CardPage.css";

export function CardPage() {
    const [files, setFiles] = useState([]);

    const handleFileRemove = (fileToRemove) => {
        const updatedFiles = files.filter((file) => file !== fileToRemove);
        setFiles(updatedFiles);
    };

    const handleSetFiles = (newFiles) => {
        const updatedFiles = [...files, ...newFiles];
        setFiles(updatedFiles);
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
                    handleFileRemove={handleFileRemove}
                    handleSetFiles={handleSetFiles}
                />
            </div>
            <MainButton text="Готово"/>
        </div>
    );
}