import {
    Avatar,
    Title,
    Section,
    Progress as CommissionProgress,
    Caption,
    List,
    Subheadline,
    Tooltip,
    IconButton,
    Button,
    Text
} from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark"
import { useUser } from "@/scripts/hooks/useUser";
import { useRef, useState } from "react";

import {ProfileCellList} from "@/react/components/ui/ProfileCellList/ProfileCellList";
import { Link } from "@/react/components/ui/Link/Link";

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./ProfilePage.css";


export function ProfilePage() {
    const tooltipRef = useRef(null);
    const [shown, setShown] = useState(false);
    const {user, isLoading, telegram_user_data} = useUser();

    // if (isLoading || !telegram_user_data) {
    //     return <Progress/>
    // }

    return (
        <div className="profile__container">
            <div className="profile_avatar__container">
                <Avatar
                    size={96}
                    src={telegram_user_data.photo_url}
                    acronym={telegram_user_data.first_name?.[0] || ''}
                    className="avatar"
                />
                <Title className="username">
                    {telegram_user_data.first_name} {telegram_user_data.last_name || ''}
                </Title>
            </div>
            <div className="commission_section__container">
                <Section header="Ваша комиссия" className="commission_section">
                    <List
                        className="commission_section__list"
                        style={{
                            background: 'var(--tgui--secondary_bg_color)',
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
                </Section>
            </div>
            <ProfileCellList/>
        </div>
    );
}