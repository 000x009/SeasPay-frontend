import {
    Avatar,
    Title,
    Caption,
    Progress as CommissionProgress,
    List,
    Subheadline,
    Text
} from "@telegram-apps/telegram-ui";
import { useUser } from "@/scripts/hooks/useUser";
import { useTelegram } from "@/scripts/hooks/useTelegram";

import {ProfileCellList} from "@/react/components/ui/ProfileCellList/ProfileCellList";
import { Link } from "@/react/components/ui/Link/Link";

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./ProfilePage.css";


export function ProfilePage() {
    const { user } = useUser();
    const { telegram_user } = useTelegram();

    return (
        <div className="profile__container">
            <div className="profile_avatar__container">
                <Avatar
                    size={96}
                    src={telegram_user.photo_url}
                    acronym={telegram_user.first_name?.[0] || ''}
                    className="avatar"
                />
                <Title className="username">
                    {telegram_user.first_name} {telegram_user.last_name || ''}
                </Title>
            </div>
            <div className="commission_section__container">
                <Caption className="commission_section__headline" level="3" plain>
                    Комиссия
                </Caption>
                <List
                    className="commission_section__list"
                    style={{
                        background: 'var(--tg-theme-secondary-bg-color)',
                        padding: 16
                    }}
                >
                    <div className="commission_section__progress_container">
                        <Subheadline className="commission_section__progress_text" level={1}>
                            Переводы: {user?.commission || 15}%
                        </Subheadline>
                        <CommissionProgress
                            value={user?.commission || 100}
                            className="commission_section__progress"
                        />
                    </div>
                    <div className="commission_section__progress_container">
                        <Subheadline className="commission_section__progress_text" level={1}>
                            Выводы: {user?.commission || 15}%
                        </Subheadline>
                        <CommissionProgress
                            value={user?.commission || 100}
                            className="commission_section__progress"
                        />
                    </div>
                    <div>
                        <Link to="/referral">
                            <Text className="how_to_reduce_commission__text">
                                Как снизить комиссию?
                            </Text>
                        </Link>
                    </div>
                </List>
            </div>
            <ProfileCellList/>
        </div>
    );
}