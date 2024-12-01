import { retrieveLaunchParams } from "@telegram-apps/sdk";
import {
    Avatar,
    Title,
    Caption,
    Progress as CommissionProgress,
    List,
    Subheadline,
    Text
} from "@telegram-apps/telegram-ui";

import { useCommission } from "@/scripts/hooks/useCommission";
import {ProfileCellList} from "@/react/components/ui/ProfileCellList/ProfileCellList";
import { Link } from "@/react/components/ui/Link/Link";
import { Progress } from "@/react/components/ui/Progress/Progress";
import { getCommissionProgress } from "@/scripts/helpers/getCommissionProgress";
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./ProfilePage.css";


export function ProfilePage() {
    const { commission, isLoading } = useCommission();
    const { initData } = retrieveLaunchParams();

    if (isLoading) {
        return <Progress/>
    }

    return (
        <div className="profile__container">
            <div className="profile_avatar__container">
                <Avatar
                    size={96}
                    src={initData.user.photoUrl}
                    acronym={initData.user.firstName?.[0] || ''}
                    className="avatar"
                />
                <Title className="username">
                    {initData.user.firstName} {initData.user.lastName || ''}
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
                            Переводы: {commission.transfer}%
                        </Subheadline>
                        <CommissionProgress
                            value={getCommissionProgress(commission.transfer)}
                            className="commission_section__progress"
                        />
                    </div>
                    <div className="commission_section__progress_container">
                        <Subheadline className="commission_section__progress_text" level={1}>
                            Выводы: {commission.withdraw}%
                        </Subheadline>
                        <CommissionProgress
                            value={getCommissionProgress(commission.withdraw)}
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