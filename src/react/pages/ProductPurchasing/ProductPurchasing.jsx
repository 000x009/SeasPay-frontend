import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Breadcrumbs, Input } from "@telegram-apps/telegram-ui";

import { Info } from "@/react/components/ui/Info/Info";
import WarningIcon from "@/assets/icons/warning.svg?react";
import EyeIcon from "@/assets/icons/eye.svg?react";
import EyeOffIcon from "@/assets/icons/eye_off.svg?react";
import SelectSection from "@/react/sections/SelectSection/SelectSection";
import "./ProductPurchasing.css";

const selectSectionItems = [
    { id: 1, name: "Прямой перевод на карту", description: "0% комиссии за перевод", defaultChecked: true },
    { id: 2, name: "Crypto Bot", description: "+3% комиссии за перевод", defaultChecked: false },
];

export function ProductPurchasing() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordVisibilityChange = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleMainButtonClick = () => {
        navigate("/payment/card");
    };

    return (
        <div className="product-purchasing">
            <div className="product-purchasing__header">
                <Breadcrumbs className="breadcrumbs" divider="slash">
                    <Breadcrumbs.Item>
                        BeatStars
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        Подписка
                    </Breadcrumbs.Item>
                </Breadcrumbs>
            </div>
            <div className="product-purchasing__info">
                <Info
                    icon={<WarningIcon />}
                    header="Инструкция"
                    body={`1. Заполните данные о вашем аккаунте BeatStars\n\n2. После покупки товара вам в личные сообщения отпишет администратор для дальнейших действий`}
                />
            </div>
            <div className="product-purchasing__form">
                <Input
                    header="Почта"
                    placeholder="example@example.com"
                    status="default"
                    className="product-purchasing__input"
                />
                <Input
                    header="Пароль"
                    placeholder="Что-то секретное..."
                    className="product-purchasing__input"
                    status="default"
                    type={isPasswordVisible ? "text" : "password"}
                    after={
                        !isPasswordVisible ? <EyeIcon
                            className="password-input-eye-icon"
                                onClick={handlePasswordVisibilityChange}
                            /> :
                            <EyeOffIcon
                                className="password-input-eye-icon"
                                onClick={handlePasswordVisibilityChange}
                            />
                    }
                />
            </div>
            <div className="product-purchasing__select-section">
                <SelectSection header="Способ оплаты" items={selectSectionItems} />
            </div>
            <MainButton text="Продолжить" onClick={handleMainButtonClick}/>
        </div>
    );
}