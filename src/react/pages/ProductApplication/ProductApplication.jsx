import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { MainButton } from "@vkruglikov/react-telegram-web-app";

import { useProductApplication } from "@/scripts/hooks/useProductApplication";
import { GeneratedForm } from "@/react/components/forms/GeneratedForm/GeneratedForm";
import { Progress } from "@/react/components/ui/Progress/Progress";
import { availablePaymentMethods } from "@/constants/payment";
import SelectSection from "@/react/sections/SelectSection/SelectSection";
import { parseInputFields } from "@/scripts/helpers/parseInputFields";
import "./ProductApplication.css";

export function ProductApplication() {
    const {id} = useParams();
    const productApplication = useProductApplication(id);
    const [formData, setFormData] = useState({});
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChangeSelectForm = (selectedItem) => {
        setSelectedPaymentMethod(selectedItem);
    };

    const isFormValid = () => {
        if (Object.keys(formData).length !== productApplication.application.login_data.length) {
            return false;
        }

        const hasEmptyValues = Object.values(formData).some(value => !value.trim());
        return !hasEmptyValues;
    }

    const handleMainButtonClick = () => {
        if (!isFormValid()) {
            return;
        }

        const state = {
            state: {
                payment_type: "product-application",
                data: {
                    form: formData,
                    productApplicationId: id,
                }
            }
        }

        if (selectedPaymentMethod === 1) {
            navigate("/payment/card", state);
        } else if (selectedPaymentMethod === 2) {
            navigate("/payment/crypto", state);
        }
    };

    if (productApplication.isLoading) {
        return <Progress />
    }

    return (
        <div className="product_application">
            <div className="product-application__form">
                <GeneratedForm
                    inputItems={parseInputFields(productApplication.application.login_data)}
                    onInputChange={handleInputChange}
                    className="product-application__input"
                />
            </div>
            <div className="product_application__select-section">
                <SelectSection
                    header="Способ оплаты"
                    items={availablePaymentMethods}
                    onChangeForm={handleChangeSelectForm}
                />
            </div>
            <MainButton text="Продолжить" onClick={handleMainButtonClick}/>
        </div>
    )
}