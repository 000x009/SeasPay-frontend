import { useState } from 'react';

import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Subheadline, Select } from '@telegram-apps/telegram-ui';
import { FileSection } from '@/react/sections/FileSection/FileSection';
import { Info } from '@/react/components/ui/Info/Info';
import WarningIcon from '@/assets/icons/warning.svg?react';

import './WithdrawFormPage.css';

const userDetails = [
    {
        id: 1,
        type: "card",
        details: {
            number: "4141 4141 4141 4141",
            cardHolder: "John Doe"
        }
    },
    {
        id: 2,
        type: "crypto",
        details: {
            address: "0x0000000000000000000000000000000000000000",
            network: "Ethereum",
            coin: "ETH"
        }
    },
];

const infoBody = [
    "1. Первым делом вы должны дать наши реквизиты человеку, который хочет отправить вам денежные средства. При переводе, ему нужно будет отправить вам скриншот чека о нем, который вы в последствие используете при подачи заявки на вывод\n\n",
    "2. После этого вам потребуется подать заявку на вывод данных средств и прикрепить ваши реквизиты для вывода"
];

export function WithdrawFormPage() {
    const [files, setFiles] = useState([]);

    return (
        <div className="withdraw-form-page__container">
            <div className='withdraw-form-page__header'>
                <Subheadline weight='2' level='2'>
                    PayPal
                </Subheadline>
                <div className='withdraw-form-page__info-container'>
                    <Info
                        icon={<WarningIcon />}
                        header="Как работает прием и вывод платежей?"
                        body={infoBody}
                    />
                </div>
            </div>
            <div className='withdraw-form__container'>
                <Select
                    header='Ваши реквизиты'
                    placeholder='Выберите ваши реквизиты'
                    className='withdraw-form__select'
                >
                    {userDetails.map((detail) => (
                        <option
                            key={detail.id}
                            value={detail.id}
                            className='withdraw-form__select-item'
                        >
                            {detail.type}
                        </option>
                    ))}
                </Select>
            </div>
            <div className='withdraw-form__files'>
                <FileSection
                    files={files}
                    setFiles={setFiles}
                    multiple={true}
                />
            </div>
            <MainButton text='Подать заявку' />
        </div>
    );
}