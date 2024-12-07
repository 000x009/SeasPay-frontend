import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { Subheadline } from '@telegram-apps/telegram-ui';
import { FileSection } from '@/react/sections/FileSection/FileSection';
import { Info } from '@/react/components/ui/Info/Info';
import WarningIcon from '@/assets/icons/warning.svg?react';
import { useCreateWithdrawOrder } from '@/scripts/hooks/useCreateWithdrawOrder';

import './WithdrawFormPage.css';


const infoBody = [
    "1. Первым делом вы должны дать наши реквизиты человеку, который хочет отправить вам денежные средства. При переводе, ему нужно будет отправить вам скриншот чека о нем, который вы в последствие используете при подачи заявки на вывод\n\n",
    "2. После этого вам потребуется подать заявку на вывод данных средств и прикрепить ваши реквизиты для вывода"
];

export function WithdrawFormPage() {
    const [file, setFile] = useState(null);
    const location = useLocation();
    const locationState = location.state;
    const createWithdrawOrder = useCreateWithdrawOrder();

    const handleMainButtonClick = async () => {
        console.log("file", file)
        if (!file) {
            return;
        }
        console.log("send")
        await createWithdrawOrder.handleCreateWithdrawOrder(locationState.pickedRequisiteId, file[0])
    }

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
            <div className='withdraw-form__files'>
                <FileSection
                    files={file}
                    setFiles={setFile}
                    multiple={false}
                    inputType="button"
                />
            </div>
            <MainButton
                text='Подать заявку'
                onClick={handleMainButtonClick}
                progress={createWithdrawOrder.isLoading}
            />
        </div>
    );
}