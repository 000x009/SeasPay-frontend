import ReferralImage from '@/assets/images/referral.png';
import { Image, Placeholder, Modal, Button, Divider, Snackbar } from '@telegram-apps/telegram-ui'
import { Icon28Close } from "@telegram-apps/telegram-ui/dist/icons/28/close"
import { Icon20Copy } from "@telegram-apps/telegram-ui/dist/icons/20/copy"

import { useState } from 'react';

import { CopyLink } from '@/scripts/helpers/copyLink';
import { botURL } from '@/constants/urls';
import { useTelegram } from '@/scripts/hooks/useTelegram';
import useShareMessage from '@/scripts/hooks/useShareMessage';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './ReferralPage.css'

const getUserReferralLink = ({userId}) => {
    return `${botURL}/start=${userId}`
}

export function ReferralPage() {
    const [modalActive, setModalActive] = useState(false);
    const [snackbarActive, setSnackbarActive] = useState(false);
    const { WebApp } = useTelegram();
    const { data } = useShareMessage()

    const handleCopyLink = async () => {
        setModalActive(false)
        setSnackbarActive(true)
        await CopyLink(getUserReferralLink({userId: WebApp.initDataUnsafe.user.id}))
    }

    const handleShareLink = async () => {
        setModalActive(false)
        console.log("sharePreparedMessage", data.prepared_message_id)
        WebApp.shareMessage(data.prepared_message_id)
    }

    return (
        <>
            <div className='image__container'>
                <Placeholder
                    header="Приглашай своих друзей и снижай комиссию вместе с ними!"
                    description="За каждый вывод/перевод средств, сделанный вашим рефералом, ваша комиссия будет снижаться на 1%"
                    className='referral_placeholder'
                />
                <Image
                    src={ReferralImage}
                    className='referral_image'
                    style={{
                        width: "170px",
                        height: "137px",
                    }}
                />
            </div>
            {snackbarActive && (
                <Snackbar
                    before={<Icon20Copy />}
                    duration={2000}
                    onClose={() => setSnackbarActive(false)}
                    className='snackbar'
                >
                    Ссылка приглашения скопирована
                </Snackbar>
            )}
            
            {!modalActive && (
                <Button
                    size="l"
                    className='referral_modal_button'
                    stretched 
                    onClick={() => {
                        setModalActive(true)
                    }}
                >
                    Пригласить друзей
                </Button>
            )}
            <Modal
                open={modalActive}
                onOpenChange={setModalActive}
                aria-describedby="modal-description"
                header={
                    <Modal.Header 
                        after={
                            <Modal.Close onClick={() => setModalActive(false)} className='referral_modal_close'>
                                <Icon28Close style={{color: 'var(--tgui--plain_foreground)'}} />
                            </Modal.Close>
                        }
                        before={
                            <Placeholder
                                header="Приглашайте друзей"
                                className='referral_modal_placeholder'
                            />
                        }
                    >
                        Пригласить друзей
                    </Modal.Header>
                }
                className='referral_modal'
            >
                <Placeholder
                    id="modal-description"
                    className='referral_modal_content__container'
                >
                    <Divider className='referral_modal_divider'/>
                    <Button
                        size="l"
                        className='referral_modal_copy__button'
                        stretched 
                        onClick={handleCopyLink}
                        before={<Icon20Copy />}
                    >
                        Копировать ссылку
                    </Button>
                    <Button
                        size="l"
                        className='referral_modal_share__button'
                        stretched 
                        onClick={handleShareLink}
                    >    
                        Поделиться в Telegram
                    </Button>
                </Placeholder>
            </Modal>
        </>
    )
}