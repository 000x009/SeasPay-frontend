import { useState } from "react";
import { Text } from "@telegram-apps/telegram-ui";
import CopyIcon from "@/assets/icons/copy.svg?react";
import CheckIcon from "@/assets/icons/check_24.svg?react";
import { copyText } from "@/scripts/helpers/copyText";
import "./Copy.css";

export function Copy({text}) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await copyText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    }

    return (
        <div className="copy__container" onClick={handleCopy}>
            <Text className="copy__text">{text}</Text>
            <div className="copy__icon-container">
                <div className={`copy__icon-wrapper ${!isCopied ? 'visible' : ''}`}>
                    <CopyIcon className="copy__icon" />
                </div>
                <div className={`copy__icon-wrapper ${isCopied ? 'visible' : ''}`}>
                    <CheckIcon className="copy__icon" />
                </div>
            </div>
        </div>
    );
}