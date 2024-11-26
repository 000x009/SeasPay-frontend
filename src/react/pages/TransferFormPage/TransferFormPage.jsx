import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Input, Subheadline, Image } from '@telegram-apps/telegram-ui';

import SelectSection from '@/react/sections/SelectSection/SelectSection';
import WriteGIF from '@/assets/gif/write_2.gif';
import './TransferFormPage.css';

const selectSectionItems = [
    { id: 1, name: "Прямой перевод на карту", description: "0% комиссии за перевод", defaultChecked: true },
    { id: 2, name: "Crypto Bot", description: "+3% комиссии за перевод", defaultChecked: false },
];

export function TransferFormPage() {
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