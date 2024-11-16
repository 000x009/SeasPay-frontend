import { List, Cell, Section } from "@telegram-apps/telegram-ui";
import ReferralIcon from "@/assets/icons/referral_system.svg?react"
import FeedbacksIcon from "@/assets/icons/feedbacks.svg?react"
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainCellList.css"

export function MainCellList() {
    return (
        <div className="cell_list__container">
            <List className="cell_list">
                <Cell
                    className="list_item"
                    description="Пригласить друга"
                    before={<ReferralIcon/>}
                    after={<ChevronForwardIcon/>}
                    interactiveAnimation="background"
                >
                    Реферальная система
                </Cell>
                <Cell
                    className="list_item"
                    description="Контроль качества"
                    before={<FeedbacksIcon/>}
                    after={<ChevronForwardIcon/>}
                    interactiveAnimation="background"
                >
                    Отзывы
                </Cell>
            </List>
        </div>
    );
}