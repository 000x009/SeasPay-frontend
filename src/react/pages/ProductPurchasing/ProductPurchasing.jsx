import { useState } from "react";
import { useParams } from "react-router-dom";

import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { Breadcrumbs } from "@telegram-apps/telegram-ui";

import { Info } from "@/react/components/ui/Info/Info";
import WarningIcon from "@/assets/icons/warning.svg?react";
import SelectSection from "@/react/sections/SelectSection/SelectSection";
import WarningIconBlack from "@/assets/icons/black-instruction.svg?react";
import { useProduct } from "@/scripts/hooks/useProduct";
import { Progress } from "@/react/components/ui/Progress/Progress";
import { GeneratedForm } from "@/react/components/forms/GeneratedForm/GeneratedForm";
import { useTelegram } from "@/scripts/hooks/useTelegram";
import { parseInputFields } from "@/scripts/helpers/parseInputFields";
import { useCountCommission } from "@/scripts/hooks/useCountCommission";
import { availablePaymentMethods } from "@/constants/payment";
import "./ProductPurchasing.css";

export function ProductPurchasing() {
    const params = useParams();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const [formData, setFormData] = useState({});

    const { theme } = useTelegram();
    const { product, platform, isLoading } = useProduct(params.id);
    const countCommission = useCountCommission();

    const handleMainButtonClick = () => {
        if (Object.keys(formData).length !== platform.login_data.length) {
            return;
        }

        const state = {
            state: {
                payment_type: "product",
                amount: product.price,
                finalRubAmount: undefined,
                data: {
                    form: formData,
                    productId: params.id,
                }
            }
        }

        let navigate_path = "";
        if (selectedPaymentMethod === 1) {
            navigate_path = "/payment/card";
        } else if (selectedPaymentMethod === 2) {
            navigate_path = "/payment/crypto";
        }

        countCommission.handleCountCommission(product.price, state, navigate_path); 
    };

    const handleChangeSelectForm = (selectedItem) => {
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
                    icon={theme === "light" ? <WarningIconBlack /> : <WarningIcon />}
                    header="Инструкция"
                    body={product.instruction}
                />
            </div>
            <div className="product-purchasing__form">
                <GeneratedForm
                    inputItems={parseInputFields(platform.login_data)}
                    onInputChange={handleInputChange}
                    className="product-purchasing__input"
                />
            </div>
            <div className="product-purchasing__select-section">
                <SelectSection
                    header="Способ оплаты"
                    items={availablePaymentMethods}
                    onChangeForm={handleChangeSelectForm}
                />
            </div>
            <MainButton
                text="Продолжить"
                onClick={handleMainButtonClick}
                progress={countCommission.isLoading}
            />
        </div>
    );
}