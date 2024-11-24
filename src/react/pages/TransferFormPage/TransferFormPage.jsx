import { useParams } from 'react-router-dom';
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Input, Subheadline } from '@telegram-apps/telegram-ui';

import SelectSection from '@/react/sections/SelectSection/SelectSection';

import './TransferFormPage.css';

const selectSectionItems = [
    { id: 1, name: "Прямой перевод на карту", description: "0% комиссии за перевод", defaultChecked: true },
    { id: 2, name: "Crypto Bot", description: "+3% комиссии за перевод", defaultChecked: false },
];

export function TransferFormPage() {
    const { paymentSystemName } = useParams();

    return (
        <div className="transfer-form-page__container">
            <div className='transfer-form-page__header'>
                <Subheadline weight='2' level='2'>
                    PayPal
                </Subheadline>
            </div>
            <div className='transfer-form__container'>
                <Input
                    header="Почта получателя"
                    placeholder="example@example.com"
                    className="transfer-form-page__input"
                />
                <Input
                    header="Сумма перевода (USD)"
                    placeholder="Какое-то число..."
                    className="transfer-form-page__input"
                />
            </div>
            <div className='select-section__container'>
                <SelectSection header='Способ оплаты' items={selectSectionItems} />
            </div>
            <MainButton text='Продолжить' />
        </div>
    );
}