import { useState } from 'react';

import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Subheadline, Image } from '@telegram-apps/telegram-ui';

import WriteGIF from '@/assets/gif/write_2.gif';
import { GeneratedForm } from "@/react/components/forms/GeneratedForm/GeneratedForm";
import { useCountCommission } from "@/scripts/hooks/useCountCommission";
import SelectSection from "@/react/sections/SelectSection/SelectSection";
import { availablePaymentMethods } from "@/constants/payment";
import './TransferFormPage.css';


const paypalFields = [
    { header: "Почта получателя", placeholder: "example@example.com", name: "email" },
    { header: "Сумма перевода (USD)", placeholder: "Какое-то число...", name: "amount" },
]

export function TransferFormPage() {
    const [formData, setFormData] = useState({});
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const countCommission = useCountCommission();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleMainButtonClick = () => {
        if (Object.keys(formData).length !== paypalFields.length) {
            return;
        }

        const state = {
            state: {
                payment_type: "transfer",
                amount: formData.amount,
                finalRubAmount: undefined,
                data: {
                    form: formData,
                }
            }
        }
        let navigate_path = "";
        if (selectedPaymentMethod === 1) {
            navigate_path = "/payment/card";
        } else if (selectedPaymentMethod === 2) {
            navigate_path = "/payment/crypto";
        }

        countCommission.handleCountCommission(formData.amount, state, navigate_path); 
    };

    const handleChangeSelectForm = (selectedItem) => {
        setSelectedPaymentMethod(selectedItem);
    };

    return (
        <div className="transfer-form-page__container">
            <div className='transfer-form-page__header'>
                <Subheadline weight='2' level='2'>
                    PayPal
                </Subheadline>
                <div className='transfer-form-page__image-container'>
                    <Image
                        src={WriteGIF}
                        className="transfer-form-page__image"
                        style={{
                            width: "150px",
                            height: "150px",
                        }}
                    />
                </div>
            </div>
            <div className='transfer-form__container'>
                <GeneratedForm
                    inputItems={paypalFields}
                    onInputChange={handleInputChange}
                    className="transfer-form"
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
                text='Продолжить'
                onClick={handleMainButtonClick}
                progress={countCommission.isLoading}
            />
        </div>
    );
}