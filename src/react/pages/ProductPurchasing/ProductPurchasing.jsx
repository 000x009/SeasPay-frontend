import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Breadcrumbs, Input } from "@telegram-apps/telegram-ui";

import { Info } from "@/react/components/ui/Info/Info";
import WarningIcon from "@/assets/icons/warning.svg?react";
import EyeIcon from "@/assets/icons/eye.svg?react";
import EyeOffIcon from "@/assets/icons/eye_off.svg?react";
import SelectSection from "@/react/sections/SelectSection/SelectSection";
import { useProduct } from "@/scripts/hooks/useProduct";
import { Progress } from "@/react/components/ui/Progress/Progress";
import "./ProductPurchasing.css";

const selectSectionItems = [
    { id: 1, name: "Прямой перевод на карту", description: "0% комиссии за перевод", defaultChecked: true },
    { id: 2, name: "Crypto Bot", description: "+3% комиссии за перевод", defaultChecked: false },
];

export function ProductPurchasing() {
    const navigate = useNavigate();
    const params = useParams();
    const { product, platform, isLoading } = useProduct(params.id);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const [formData, setFormData] = useState({});

    const handlePasswordVisibilityChange = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleMainButtonClick = () => {
        if (selectedPaymentMethod === 1) {
            navigate("/payment/card");
        } else if (selectedPaymentMethod === 2) {
            navigate("/payment/crypto");
        }
    };

    const handleChangeForm = (selectedItem) => {
        setSelectedPaymentMethod(selectedItem);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (isLoading) {
        return <Progress/>;
    }

    return (
        <div className="product-purchasing">
            <div className="product-purchasing__header">
                <Breadcrumbs className="breadcrumbs" divider="slash">
                    <Breadcrumbs.Item>
                        {platform.name}
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        {product.name}
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
                    name="email"
                    onChange={handleInputChange}
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
                    name="password"
                    onChange={handleInputChange}
                />
            </div>
            <div className="product-purchasing__select-section">
                <SelectSection header="Способ оплаты" items={selectSectionItems} onChangeForm={handleChangeForm} />
            </div>
            <MainButton text="Продолжить" onClick={handleMainButtonClick}/>
        </div>
    );
}