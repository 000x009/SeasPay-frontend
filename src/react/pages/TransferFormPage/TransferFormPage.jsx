import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Subheadline, Image } from '@telegram-apps/telegram-ui';

import SelectSection from '@/react/sections/SelectSection/SelectSection';
import WriteGIF from '@/assets/gif/write_2.gif';
import { GeneratedForm } from "@/react/components/forms/GeneratedForm/GeneratedForm";
import './TransferFormPage.css';

const selectSectionItems = [
    { id: 1, name: "Прямой перевод на карту", description: "0% комиссии за перевод", defaultChecked: true },
    { id: 2, name: "Crypto Bot", description: "+3% комиссии за перевод", defaultChecked: false },
];

const paypalFields = [
    { header: "Почта получателя", placeholder: "example@example.com", name: "email" },
    { header: "Сумма перевода (USD)", placeholder: "Какое-то число...", name: "amount" },
]

export function TransferFormPage() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

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

    const handleMainButtonClick = () => {
        if (Object.keys(formData).length !== paypalFields.length) {
            return;
        }

        const state = {
            state: {
                payment_type: "transfer",
                amount: formData.amount,
                data: {
                    form: formData,
                }
            }
        }
        
        if (selectedPaymentMethod === 1) {
            navigate("/payment/card", state);
        } else if (selectedPaymentMethod === 2) {
            navigate("/payment/crypto", state);
        }
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
                    className="product-purchasing__input"
                />
            </div>
            <div className='select-section__container'>
                <SelectSection
                    header="Способ оплаты"
                    items={selectSectionItems}
                    onChangeForm={handleChangeSelectForm}
                />
            </div>
            <MainButton text='Продолжить' onClick={handleMainButtonClick} />
        </div>
    );
}